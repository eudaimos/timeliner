"use strict";

const cmParser = require("./cm-parser");

const parsers = {
  cm: cmParser,
  md: cmParser,
};

module.exports = parser;

function parser(input, type = "cm") {
  if (Array.isArray(input)) {
    // iterate each input
    return;
  }
  const useParser = parsers[type];
  if (!useParser) {
    return;
  }
  const data = useParser.parse(input);
  // iterate the data looking for timeline dates
  const hasDates = data.timeline.some((contentBlock) => {
    if (isEvent(contentBlock)) {
      return true;
    }
    if (hasEvents(contentBlock.content)) {
      return true;
    }
    return false;
    //   if (contentBlock.dt) {
    //     return true;
    //   }
    //   if (!contentBlock.content) {
    //     return false;
    //   }
    //   return contentBlock.content.some((line) => {
    //     return line instanceof Object;
    //   });
  });
  if (!hasDates) {
    // result of parsing content without dates is undefined (nothing)
    return;
  }
  return data;
}

function hasEvents(data) {
  return data.some((item) => item instanceof Object && isEvent(item));
}

function isEvent(item) {
  return !!item.dt || !!item.range;
}
