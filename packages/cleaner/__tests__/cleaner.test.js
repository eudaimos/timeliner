"use strict";

const util = require("util");
const cleaner = require("..");
const input = require("../lib/input.sample.json");

// describe("@timeliner/cleaner", () => {
//   it("needs to display desired output", () => {
console.log(util.inspect(cleaner(input.timeline), false, null, true));
//   });
// });
