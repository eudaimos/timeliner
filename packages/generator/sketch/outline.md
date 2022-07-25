# Outlining

Can break up a page into multiple timelines by having titled content sections that don't have date/time as parent levels to timeline data

Rules:

- The first non-timeline section will be the outer container of a timeline
- Any non-timeline content at a lower level than a timeline section will be a child of that timeline section
- A non-timeline section at a higher level than a timeline section will represent a break
- outer containers of a timeline can be used to determine series that work to build a larger timeline

```md
# Page Title

Content content content

## Section Title for a Timeline

Content for a timeline

### Timeline 1 Group 1

%2009/11/21%

Content for timeline head

#### Timeline 1 event 1

%2009/11/21%10:00AM…01:00PM%

Individual event 1 description

#### Timeline 1 event 2

%2009/11/21%01:05PM%

Individual event 2 description

#### Timeline 1 event 3

%2009/11/21%01:30PM…04:00PM%

Individual event 3 content

### Timeline 1 Group 2

%2009/11/22%…%2009/11/27%

Content for group head

#### Timeline 1 event 4

%2009/11/23%

Event 4 description

## Section Title for a Timeline

This would break the timeline continuity from above
by being a higher outline header without a date/time

A new timeline will be generated/displayed apart from the previous timeline

### Timeline 2 event 1

%2010/01/01%

This timeline has no groups only events

### Timeline 2 event 2

%2010/01/05%

Special day event

- %2010/01/05%09:00AM% Sub event 1
- %2010/01/05%12:00PM…05:00PM% Sub event 2
- %2010/01/05%05:00PM%…%2010/01/06% Sub event 3

### Timeline 2 event 3

%2009/01/12%

Another event in timeline 2
```

will translate into

```html
<html>
  <header></header>
  <body>
    <h1>Page Title</h1>
    <p>Content content content</p>
    <section>
      <h2>Section Title for a Timeline</h2>
      <p>Content for a timeline</p>
      <article class="timeline">
        <section class="timeline-group">
          <h3>Timeline 1 Group 1</h3>
          <div class="date">
            <span class="date">2009/11/21</span>
          </div>
          <p>Content for timeline head</p>
          <article class="timeline-event">
            <h4>Timeline 1 event 1</h4>
            <div class="date">
              <span class="date">2009/11/21</span>
              <span class="time">10:00AM</span>
              <span>-</span>
              <span class="time">01:00PM</span>
            </div>
            <p>Individual event 1 description</p>
          </article>
          <article class="timeline-event">
            <h4>Timeline 1 event 2</h4>
            <div class="date">
              <span class="date">2009/11/21</span>
              <span class="time">01:05PM</span>
            </div>
            <p>Individual event 2 description</p>
          </article>
          <article class="timeline-event">
            <h4>Timeline 1 event 3</h4>
            <div class="date">
              <span class="date">2009/11/21</span>
              <span class="time">01:30PM</span>
              <span>-</span>
              <span class="time">04:00PM</span>
            </div>
            <p>Individual event 3 description</p>
          </article>
        <section>
        <section class="timeline-group">
          <h3>Timeline 1 Group 2</h3>
          <div class="date">
            <span class="date">2009/11/22</span>
            <span>-</span>
            <span class="date">2009/11/27</span>
          </div>
          <p>Content for group head</p>
          <article class="timeline-event">
            <h4>Timeline 1 event 1</h4>
            <div class="date">
              <span class="date">2009/11/23</span>
            </div>
            <p>Event 4 description</p>
          </article>
        </section>
      </article>
    </section>
    <section>
      <h2>Section Title for a Timeline</h2>
      <p>This would break the timeline continuity from above
         by being a higher outline header without a date/time

         A new timeline will be generated/displayed apart from the previous timeline</p>
      <article class="timeline">
        <article class="timeline-event">
          <h3>Timeline 2 event 1</h3>
          <div class="date">
            <span class="date">2010/01/01</span>
          </div>
          <p>This timeline has no groups only events</p>
        </article>
        <article class="timeline-event">
          <h3>Timeline 2 event 2</h3>
          <div class="date">
            <span class="date">2010/01/05</span>
          </div>
          <p>Special day event</p>
        </article>
        <article class="timeline-event">
          <h3>Timeline 2 event 3</h3>
          <div class="date">
            <span class="date">2010/01/12</span>
          </div>
          <p>Another event in timeline 2</p>
        </article>
      </article>
    </section>
  </body>
</html>
```
