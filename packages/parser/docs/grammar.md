
# grammar.pegjs

## 


### timeline

![timeline](./grammar/timeline.svg)

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
References: [line](#line), [title](#title), [details](#details)

### line

![line](./grammar/line.svg)

Used by: [content](#content), [cblock](#cblock)
References: [details](#details)

### details

![details](./grammar/details.svg)

Used by: [cblock](#cblock), [line](#line)

### range

![range](./grammar/range.svg)

Used by: [spot](#spot)
References: [datetimedata](#datetimedata)

### datetimedata

![datetimedata](./grammar/datetimedata.svg)

Used by: [spot](#spot), [range](#range)
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

