
# grammar.pegjs

## 


### data

![data](./grammar/data.svg)

References: [options](#options), [timeline](#timeline)

### options

![options](./grammar/options.svg)

Used by: [data](#data)
References: [optionsstart](#optionsstart), [option](#option), [optionsblock](#optionsblock)

### optionsstart

![optionsstart](./grammar/optionsstart.svg)

Used by: [options](#options)

### optionsblock

![optionsblock](./grammar/optionsblock.svg)

Used by: [options](#options)

### option

![option](./grammar/option.svg)

Used by: [options](#options)

### timeline

![timeline](./grammar/timeline.svg)

Used by: [data](#data)
References: [spot](#spot)

### spot

![spot](./grammar/spot.svg)

Used by: [timeline](#timeline)
References: [title](#title), [range](#range), [content](#content), [datetimedata](#datetimedata)

### title

![title](./grammar/title.svg)

Used by: [spot](#spot), [content](#content), [cblock](#cblock)
References: [level](#level)

### level

![level](./grammar/level.svg)

Used by: [title](#title)

### content

![content](./grammar/content.svg)

Used by: [spot](#spot)
References: [cblock](#cblock), [line](#line), [title](#title)

### cblock

![cblock](./grammar/cblock.svg)

Used by: [content](#content)
References: [bulletevent](#bulletevent), [title](#title), [line](#line), [details](#details)

### line

![line](./grammar/line.svg)

Used by: [content](#content), [cblock](#cblock)
References: [details](#details)

### bulletevent

![bulletevent](./grammar/bulletevent.svg)

Used by: [cblock](#cblock)
References: [bullet](#bullet), [range](#range), [datetimedata](#datetimedata), [details](#details)

### details

![details](./grammar/details.svg)

Used by: [cblock](#cblock), [line](#line), [bulletevent](#bulletevent)

### bullet

![bullet](./grammar/bullet.svg)

Used by: [bulletevent](#bulletevent)

### range

![range](./grammar/range.svg)

Used by: [spot](#spot), [bulletevent](#bulletevent)
References: [datetimedata](#datetimedata)

### datetimedata

![datetimedata](./grammar/datetimedata.svg)

Used by: [spot](#spot), [bulletevent](#bulletevent), [range](#range)
References: [date](#date), [worldtimeduration](#worldtimeduration), [worldtime](#worldtime)

### date

![date](./grammar/date.svg)

Used by: [datetimedata](#datetimedata)
References: [year](#year), [d2](#d2)

### year

![year](./grammar/year.svg)

Used by: [date](#date)

### worldtimeduration

![worldtimeduration](./grammar/worldtimeduration.svg)

Used by: [datetimedata](#datetimedata)
References: [worldtime](#worldtime)

### worldtime

![worldtime](./grammar/worldtime.svg)

Used by: [datetimedata](#datetimedata), [worldtimeduration](#worldtimeduration)
References: [time](#time), [zone](#zone)

### zone

![zone](./grammar/zone.svg)

Used by: [worldtime](#worldtime)
References: [tz](#tz), [d2](#d2)

### tz

![tz](./grammar/tz.svg)

Used by: [zone](#zone)

### time

![time](./grammar/time.svg)

Used by: [worldtime](#worldtime)
References: [d2](#d2), [meridiem](#meridiem)

### d2

![d2](./grammar/d2.svg)

Used by: [date](#date), [zone](#zone), [time](#time)

### meridiem

![meridiem](./grammar/meridiem.svg)

Used by: [time](#time)

