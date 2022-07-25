const path = require("path");
const fs = require("fs");
const util = require("util");
const parser = require("../packages/parser");
const cleaner = require("../packages/cleaner");
const generator = require("../packages/generator");

const filename = path.join(__dirname, "input.md");

const inputMD = fs.readFileSync(filename, { encoding: "UTF-8" });

// console.log(inputMD);

const parsedData = parser(inputMD);

// console.log(parsedData);

const cleanData = cleaner(parsedData.timeline);

console.log(util.inspect(cleanData, false, null, true));
