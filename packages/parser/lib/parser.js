"use strict";

import cmParser from "./cm-parser";

module.exports = parser;

function parser(input) {
  if (Array.isArray(input)) {
    // iterate each input
    return;
  }
  const data = cmParser.parse(input);
  // iterate the data looking for timeline dates
  const hasDates = data.some((contentBlock) => {
    if (contentBlock.dt) {
      return true;
    }
    if (!contentBlock.content) {
      return false;
    }
    return contentBlock.content.some((line) => {
      return line instanceof Object;
    });
  });
}
