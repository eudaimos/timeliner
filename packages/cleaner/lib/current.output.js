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
                  dt: { year: 2009, month: 11, day: 21, hasTime: false },
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
                          duration: [
                            { hour: 10, minute: 0, meridiem: "AM" },
                            { hour: 1, minute: 0, meridiem: "PM" },
                          ],
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
                          hour: 1,
                          minute: 5,
                          meridiem: "PM",
                          zone: "PDT",
                          hasTime: true,
                        },
                        content: ["", "Individual event 2 description", ""],
                      },
                      {
                        title: "Timeline 1 event 3",
                        isEvent: true,
                        dt: {
                          year: 2009,
                          month: 11,
                          day: 21,
                          duration: [
                            { hour: 1, minute: 30, meridiem: "PM" },
                            { hour: 4, minute: 0, meridiem: "PM" },
                          ],
                          hasTime: true,
                        },
                        content: ["", "Individual event 3 content", ""],
                      },
                    ],
                  },
                },
                {
                  title: "Timeline 1 Group 2",
                  isEvent: true,
                  range: [
                    { year: 2009, month: 11, day: 22, hasTime: false },
                    { year: 2009, month: 11, day: 27, hasTime: false },
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
            isTCB: true,
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
                  dt: { year: 2010, month: 1, day: 1, hasTime: false },
                  content: ["", "This timeline has no groups only events", ""],
                },
                {
                  title: "Timeline 2 event 2",
                  isEvent: true,
                  dt: { year: 2010, month: 1, day: 5, hasTime: false },
                  content: ["", "Special day event", "", ""],
                  children: {
                    level: 4,
                    items: [
                      {
                        title: "Sub event 1",
                        dt: {
                          year: 2010,
                          month: 1,
                          day: 5,
                          hour: 9,
                          minute: 0,
                          meridiem: "AM",
                          offset: { hours: -8, mins: 0 },
                          hasTime: true,
                        },
                        isEvent: true,
                      },
                      {
                        title: "Sub event 2",
                        dt: {
                          year: 2010,
                          month: 1,
                          day: 5,
                          duration: [
                            { hour: 12, minute: 0, meridiem: "PM" },
                            { hour: 5, minute: 0, meridiem: "PM" },
                          ],
                          hasTime: true,
                        },
                        isEvent: true,
                        children: {
                          level: 5,
                          items: [
                            {
                              title: "Sub 2 sub 1",
                              dt: {
                                year: 2010,
                                month: 1,
                                day: 5,
                                hour: 2,
                                minute: 0,
                                meridiem: "PM",
                                hasTime: true,
                              },
                              isEvent: true,
                              children: {
                                level: 6,
                                items: [
                                  {
                                    title: "Sub 2 sub 1 sub 1",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 5,
                                      hour: 2,
                                      minute: 15,
                                      meridiem: "PM",
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                  },
                                  {
                                    title: "Sub 2 sub 1 sub 2",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 5,
                                      hour: 2,
                                      minute: 30,
                                      meridiem: "PM",
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                  },
                                ],
                              },
                            },
                            {
                              title: "Sub 2 sub 2",
                              dt: {
                                year: 2010,
                                month: 1,
                                day: 5,
                                hour: 3,
                                minute: 0,
                                meridiem: "PM",
                                hasTime: true,
                              },
                              isEvent: true,
                              children: {
                                level: 6,
                                items: [
                                  {
                                    title: "Sub 2 sub 2 sub 3",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 5,
                                      hour: 3,
                                      minute: 5,
                                      meridiem: "PM",
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        title: "Sub event 3",
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
                        isEvent: true,
                      },
                      {
                        title: "Sub event 4",
                        isEvent: true,
                        dt: {
                          year: 2010,
                          month: 1,
                          day: 6,
                          hasTime: false,
                        },
                        content: ["Hey, it could happen", ""],
                        children: {
                          level: 5,
                          items: [
                            {
                              title: "Sub 4 sub 1",
                              isEvent: true,
                              dt: {
                                year: 2010,
                                month: 1,
                                day: 6,
                                hour: 9,
                                minute: 0,
                                meridiem: null,
                                hasTime: true,
                              },
                              content: ["", "Content content content", "", ""],
                              children: {
                                level: 6,
                                items: [
                                  {
                                    title: "Sub 4 sub 1 sub 1",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 6,
                                      hour: 9,
                                      minute: 15,
                                      meridiem: null,
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                    children: {
                                      level: 7,
                                      items: [
                                        {
                                          title: "Sub 4 sub 1 sub 1 sub 1",
                                          dt: {
                                            year: 2010,
                                            month: 1,
                                            day: 6,
                                            hour: 9,
                                            minute: 15,
                                            meridiem: null,
                                            hasTime: true,
                                          },
                                          isEvent: true,
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    title: "Sub 4 sub 1 sub 2",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 6,
                                      hour: 9,
                                      minute: 15,
                                      meridiem: null,
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                  },
                                  {
                                    title: "Sub 4 sub 1 sub 3",
                                    dt: {
                                      year: 2010,
                                      month: 1,
                                      day: 6,
                                      hour: 9,
                                      minute: 15,
                                      meridiem: null,
                                      hasTime: true,
                                    },
                                    isEvent: true,
                                  },
                                  {
                                    title: "Sub Content not an event",
                                    isEvent: false,
                                    content: [
                                      "",
                                      "Some content within Sub 4 sub 1",
                                      "",
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        title: "More content",
                        isEvent: false,
                        content: [
                          "",
                          "within level 3 event above that is not an event",
                          "",
                        ],
                      },
                    ],
                  },
                },
                {
                  title: "Timeline 2 event 3",
                  isEvent: true,
                  dt: { year: 2009, month: 1, day: 12, hasTime: false },
                  content: ["", "Another event in timeline 2"],
                },
              ],
            },
            isTCB: true,
          },
        ],
      },
    },
  ],
};
