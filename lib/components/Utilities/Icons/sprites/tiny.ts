import alertIcon from "./tiny/alert.svg?react";
import caretDownIcon from "./tiny/caret-down.svg?react";
import caretUpIcon from "./tiny/caret-up.svg?react";
import checkIcon from "./tiny/check.svg?react";
import chevronDownIcon from "./tiny/chevron-down.svg?react";
import chevronLeftIcon from "./tiny/chevron-left.svg?react";
import chevronRightIcon from "./tiny/chevron-right.svg?react";
import chevronUpIcon from "./tiny/chevron-up.svg?react";
import circleIcon from "./tiny/circle.svg?react";
import clockIcon from "./tiny/clock.svg?react";
import crossIcon from "./tiny/cross.svg?react";
import personIcon from "./tiny/person.svg?react";
import questionIcon from "./tiny/question.svg?react";

export const tiny = {
  alert: alertIcon,
  caretDown: caretDownIcon,
  caretUp: caretUpIcon,
  check: checkIcon,
  chevronDown: chevronDownIcon,
  chevronLeft: chevronLeftIcon,
  chevronRight: chevronRightIcon,
  chevronUp: chevronUpIcon,
  circle: circleIcon,
  clock: clockIcon,
  cross: crossIcon,
  person: personIcon,
  question: questionIcon,
}

export type Tiny = keyof typeof tiny;