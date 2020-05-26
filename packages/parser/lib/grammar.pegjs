{
  function makeInt(nn) {
    if (Array.isArray(nn)) {
      return parseInt(nn.join(''), 10);
    }
    return parseInt(nn, 10);
  }
  
  function optsAtoO(opts) {
  	if (!Array.isArray(opts)) {
      return opts;
    }
    return opts.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
  }
}

data
  = o:options t:timeline { return { options: o, timeline: t }; }
  / t:timeline { return { options: {}, timeline: t }; }

options
  = optionsstart opts:(o:option '\n' optionsblock? { return o; })* { return optsAtoO(opts); }

optionsstart
  = '|-' '-'* '%' ('t' 'ime'? 'l' 'i'? 'n' 'e'? 'r') '%' '-'* '|' [ \t]* '\n'

optionsblock
  = '|-' '-'* '|\n'

option
  = '|' key:[^:]+ ':' value:[^|]* '|' { return { key: key.join('').trim(), value: value.join('').trim() }; }

timeline
  = '\n'* s:spot+ { return s; }

spot
  = t:title '\n'* r:range '\n' c:content { return { ...t, ...r, content: c }; }
  / t:title '\n'* r:range '\n'* { return { ...t, ...r, content: [] }; }
  / t:title '\n'* dt:datetimedata '\n' c:content { return { ...t, dt: dt, content: c }; }
  / t:title '\n'* dt:datetimedata '\n'* { return { ...t, dt: dt, content: [] }; }
  / t:title c:content { return { ...t, dt: null, content: c.slice(1) }; } // hack to remove the first newline of title
  /// t:title '\n' c:content { return { ...t, dt: null, content: c }; }
  /// t:title '\n'* !title { return { ...t, dt: null, content: [] }; }
  // / t:title c1:content dt:datetimedata '\n' c2:content? { return { title: t, dt: dt, content: [...c1, ...c2] }; }

title
  = l:level t:[^\n]+ &'\n' { return { title: t.join(''), level: l }; }

level
  = l:'#'+ ' ' { return l.length; }

content
  = b:cblock+ c:line &title { return b.concat(c); }
  / cblock+

cblock
  = e:bulletevent !title { return e; }
  / c:line !title { return c; }
  / d:details !. { return d || ''; }

line
  = d:details? '\n' { return d || ''; }

bulletevent
  = bullet dt:(r:range { return r; } / dt:datetimedata { return { dt }; }) t:(' ' d:details { return d; })? '\n' { return { ...dt, title: t.trim() }; }

details
  = chars:[^\n]+ { return chars.join(''); }

bullet
  = '- ' / '+ ' / '* '

range
  = f:datetimedata ('…' / '...') t:datetimedata { return { range: [f, t] }; }

datetimedata
  = '%' d:date '%' dur:worldtimeduration '%' { return { ...d, ...dur, hasTime: true }; }
  / '%' d:date '%' t:worldtime '%' { return { ...d, ...t, hasTime: true }; }
  / '%' d:date '%' { return { ...d, hasTime: false }; }

date
  = y:year '/' m:d2 '/' d:d2 { return { year: makeInt(y), month: makeInt(m), day: makeInt(d) }; }
  / y:year '/' m:d2 { return { year: makeInt(y), month: makeInt(m) }; }
  / y:year { return { year: makeInt(y) }; }

year
  = [0-9][0-9][0-9][0-9]

worldtimeduration
  = f:worldtime ('…' / '...') t:worldtime { return { duration: [f, t] }; }

worldtime
  = t:time z:zone { return { ...t, ...z }; }
  / t:time { return t; }

zone
  = '(' a:[a-z_]i+ '/' b:[a-z_]i+ ')' { return { locale: a.join('') + '/' + b.join('') }; }
  / 'Z'i z:tz { return { zone: z.join('') }; }
  / '+' h:d2 ':' m:d2 { return { offset: { hours: makeInt(h), mins: makeInt(m) } }; }
  / '-' h:d2 ':' m:d2 { return { offset: { hours: 0 - makeInt(h), mins: makeInt(m) } }; }
  / '+' h:d2 { return { offset: { hours: makeInt(h), mins: 0 } }; }
  / '-' h:d2 { return { offset: { hours: 0 - makeInt(h), mins: 0 } }; }

tz
  = [A-Z][A-Z][A-Z]

time
  = h:d2 ':' m:d2 ':' s:d2 ampm:meridiem? { return { hour: makeInt(h), minute: makeInt(m), second: makeInt(s), meridiem: ampm }; }
  / h:d2 ':' m:d2 ampm:meridiem? { return { hour: makeInt(h), minute: makeInt(m), meridiem: ampm }; }
  / h:d2 ampm:meridiem? { return { hour: makeInt(h), meridiem: ampm }; }

d2
  = [0-9][0-9]

meridiem
  = 'AM'i
  / 'PM'i
