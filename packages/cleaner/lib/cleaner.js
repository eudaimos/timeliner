"use strict";

module.exports = cleaner;

function cleaner(timelineData) {
  if (
    !timelineData ||
    !Array.isArray(timelineData) ||
    !timelineData.length ||
    !hasEvents(timelineData)
  ) {
    return {};
  }
  const [timeline] = buildLevel(timelineData[0].level, timelineData, 0);
  markTimelineContentBlocks(timeline.items);
  return timeline;
}

function hasEvents(timelineData) {
  return timelineData.some((item) => isEvent(item));
}

function isEvent(item) {
  return !!item.dt || !!item.range;
}

function markTimelineContentBlocks(items) {
  items.forEach((item) => {
    if (isTimelineContentBlock(item)) {
      item.isTCB = true;
    } else if (item.children && item.children.items) {
      // find the TCB
      markTimelineContentBlocks(item.children.items);
    }
  });
}

function isTimelineContentBlock(item) {
  if (
    !item ||
    item.isEvent ||
    !item.children ||
    !item.children.items ||
    !item.children.items.length
  ) {
    return false;
  }
  return hasEvents(item.children.items);
}

function buildLevel(level, items, index) {
  const rv = { level, items: [] };
  let current = {};
  for (let i = index; i < items.length; i++) {
    let item = items[i];
    // if we hit an item at a higher level, escape
    if (item.level < level) {
      return [rv, i];
    }
    // if we found an item at a lower level, build and attach it
    if (item.level > level) {
      // capture last index cleaned
      // add the level to the current children
      // skip ahead to the next one
      const [lower, next] = buildLevel(item.level, items, i);
      if (!current.children) {
        current.children = lower;
      } else {
        current.children.items = current.children.items.concat(lower.items);
      }
      i = next - 1;
      // rv.items.push(current);
      continue;
    }
    current = {};
    // build the current item and attach it to this level
    current.title = item.title;
    current.isEvent = isEvent(item);
    if (item.dt) {
      current.dt = item.dt;
    }
    if (item.range) {
      current.range = item.range;
    }
    if (item.content && item.content.length) {
      if (!current.content) {
        current.content = [];
      }
      for (let c = 0; c < item.content.length; c++) {
        // item.content.forEach((c) => {
        const citem = item.content[c];
        if (citem instanceof Object) {
          // child event from bullet
          if (!current.children) {
            current.children = {
              level: level + 1,
              items: [],
            };
          }
          const [child, next] = generateContentEvent(
            level,
            citem,
            c,
            item.content
          );
          current.children.items.push(child);
          c = next - 1;

          // const { level: l, ...event } = citem;
          // if (current.children.level < level + l) {
          // } else {
          //   current.children.items.push({ ...event, isEvent: true });
          // }
        } else {
          current.content.push(citem);
        }
        // });
      }
    }
    rv.items.push(current);
  }
  return [rv, items.length];
}

function generateContentEvent(level, item, i, items) {
  const { level: l, ...vals } = item;
  const event = { ...vals, isEvent: true };
  if (!(items[i + 1] instanceof Object)) {
    return [event, i + 1];
  }
  for (let c = i + 1; c < items.length; c++) {
    const { level: l2, ...citem } = items[c];
    if (l >= l2) {
      return [event, c];
    }
    if (l < l2) {
      if (!event.children) {
        event.children = {
          level: level + l2,
          items: [],
        };
      }
      const [event2, next] = generateContentEvent(level, items[c], c, items);
      event.children.items.push(event2);
      c = next - 1;
    }
  }
  return [event, items.length];
}

// /**
//  *
//  *
//  * @param {*} level
//  * @param {*} content
//  * @param {*} children
//  * @param {*} index
//  * @returns [content, children, nextIndex]
//  */
// function generateContentEventsLevel(level, content, children, index) {
//   let item = {};
//   for (let i = index; i < content.length; i++) {
//     const { level: l, ...event } = content[index];
//     if (children.level > level + l) {
//       return [content, children, i];
//     }
//     if (children.level < level + l) {
//       if (!item.children) {
//         item.children = {
//           level: level + l,
//           items: [],
//         };
//       }
//       const [cont, childs, next] = generateContentEventsLevel(
//         level,
//         content,
//         item.children,
//         i
//       );
//       i = next - 1;
//       continue;
//     }
//     item = { ...event, isEvent: true };
//     children.items.push(item);
//   }
// }

const output = {
  level: 1,
  items: [
    {
      title: "Page Title",
      isEvent: false,
      content: ["", "Content content content", ""],
      children: {
        level: 2,
        items: [
          {
            title: "Section Title for a Timeline",
            isEvent: false,
            content: ["", "Content for a timeline", ""],
            children: {
              level: 3,
              items: [
                {
                  title: "Timeline 1 Group 1",
                  isEvent: true,
                  dt: {
                    year: 2009,
                    month: 11,
                    day: 21,
                    hasTime: false,
                  },
                  content: ["", "Content for timeline head", ""],
                  children: {
                    level: 4,
                    items: [
                      {
                        title: "Timeline 1 event 1",
                        isEvent: true,
                        dt: {
                          year: 2009,
                          month: 11,
                          day: 21,
                          duration: [],
                          hasTime: true,
                        },
                        content: ["", "Individual event 1 description", ""],
                      },
                      {
                        title: "Timeline 1 event 2",
                        isEvent: true,
                        dt: {
                          year: 2009,
                          month: 11,
                          day: 21,
                          duration: [],
                          hasTime: true,
                        },
                        content: ["", "Individual event 3 description", ""],
                      },
                      {
                        title: "Timeline 1 event 3",
                        isEvent: true,
                        dt: {
                          year: 2009,
                          month: 11,
                          day: 21,
                          duration: [],
                          hasTime: true,
                        },
                        content: ["", "Individual event 3 description", ""],
                      },
                    ],
                  },
                },
                {
                  title: "Timeline 1 Group 2",
                  isEvent: true,
                  range: [
                    {
                      year: 2009,
                      month: 11,
                      day: 22,
                      hasTime: false,
                    },
                    {
                      year: 2009,
                      month: 11,
                      day: 27,
                      hasTime: false,
                    },
                  ],
                  content: ["", "Content for group head", ""],
                  children: {
                    level: 4,
                    items: [
                      {
                        title: "Timeline 1 event 4",
                        isEvent: true,
                        dt: {
                          year: 2009,
                          month: 11,
                          day: 23,
                          hasTime: false,
                        },
                        content: ["", "Event 4 description", ""],
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            title: "Section Title for a Timeline",
            isEvent: false,
            content: [
              "",
              "This would break the timeline continuity from above",
              "by being a higher outline header without a date/time",
              "",
              "A new timeline will be generated/displayed apart from the previous timeline",
              "",
            ],
            children: {
              level: 3,
              items: [
                {
                  title: "Timeline 2 event 1",
                  isEvent: true,
                  dt: {
                    year: 2010,
                    month: 1,
                    day: 1,
                    hasTime: false,
                  },
                  content: ["", "This timeline has no groups only events", ""],
                },
                {
                  title: "Timeline 2 event 2",
                  isEvent: true,
                  dt: {
                    year: 2010,
                    month: 1,
                    day: 5,
                    hasTime: false,
                  },
                  content: ["", "Special day event", "", ""],
                  children: {
                    level: 4,
                    items: [
                      {
                        title: "Sub event 1",
                        isEvent: true,
                        dt: {
                          year: 2010,
                          month: 1,
                          day: 5,
                          hour: 9,
                          minute: 0,
                          meridiem: "AM",
                          hasTime: true,
                        },
                      },
                      {
                        title: "Sub event 2",
                        isEvent: true,
                        dt: {
                          year: 2010,
                          month: 1,
                          day: 5,
                          hasTime: true,
                          duration: [
                            {
                              hour: 12,
                              minute: 0,
                              meridiem: "PM",
                            },
                            {
                              hour: 5,
                              minute: 0,
                              meridiem: "PM",
                            },
                          ],
                        },
                      },
                      {
                        title: "Sub event 3",
                        isEvent: true,
                        range: [
                          {
                            year: 2010,
                            month: 1,
                            day: 5,
                            hour: 5,
                            minute: 0,
                            meridiem: "PM",
                            hasTime: true,
                          },
                          {
                            year: 2010,
                            month: 1,
                            day: 6,
                            hasTime: false,
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  title: "Timeline 2 event 3",
                  isEvent: true,
                  dt: {
                    year: 2010,
                    month: 1,
                    day: 12,
                    hasTime: false,
                  },
                  content: ["", "Another event in timeline 2"],
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
