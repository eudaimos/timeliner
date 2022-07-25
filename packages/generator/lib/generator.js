"use strict";

module.exports = generator;

function generator(data) {
  // TODO
}

const title = (level, text) => {
  return `<h${level}>${text}</h${level}>`;
};

const dateBlock = (fromDate, toDate) => {
  let rv =
    `<div class="date">` + `<span class="date">${dateString(fromDate)}</span>`;
  if (fromDate.hasTime) {
    if (fromDate.duration) {
      rv += `<span class="time">${timeString(fromDate.duration[0])}</span>`;
      joiner + `<span class="time">${timeString(fromDate.duration[1])}</span>`;
    } else {
      rv += `<span class="time">${timeString(fromDate)}</span>`;
    }
  }
  if (toDate) {
    rv += joiner + `<span class="date">${dateString(toDate)}</span>`;
    if (toDate.hasTime) {
      if (toDate.duration) {
        rv += `<span class="time">${timeString(toDate.duration[0])}</span>`;
        joiner + `<span class="time">${timeString(toDate.duration[1])}</span>`;
      } else {
        rv += `<span class="time">${timeString(toDate)}</span>`;
      }
    }
  }
  rv += "</div>";
  return rv;
};

const dateString = ({ year, month, day }) =>
  year + (month ? `/${month}` : "") + (day ? `/${day}` : "");

const timeString = ({
  hour,
  minute,
  second,
  meridiem,
  offset,
  zone,
  locale,
}) => {
  let rv = `${hour}:${minute > 9 ? minute : "0" + minute}`;
  rv += second != null ? ":" + (second > 9 ? second : "0" + second) : "";
  rv += meridiem != null ? " " + meridiem : "";
  if (offset || zone || locale) {
    rv += timeZone({ offset, zone, locale });
  }
  return rv;
};

const timeZone = ({ offset, zone, locale }) => {
  if (offset) {
    return tzOffset(offset);
  }
  if (zone) {
    return tzZone(zone);
  }
  if (locale) {
    return tzLocale(locale);
  }
  return "";
};

const tzOffset = (o) =>
  `<span class="tz offset">${offsetModifier(o)}${twoDigitString(
    o.hours
  )}:${twoDigitString(o.minutes)}</span>`;
const offsetModifier = (o) => (o.hours < 0 ? "-" : "+");

const tzZone = (tz) => `<span class="tz zone">${tz}</span>`;

const tzLocale = (locale) => `<span class="tz locale">${locale}</span>`;

const twoDigitString = (num) => (Math.abs(num) < 10 ? "0" : "") + num;

const joiner = '<span class="joiner">-</span>';
