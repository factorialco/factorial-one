/* do not change this file */

import { configure, addDecorator } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-ondevice-knobs";
import "./preview";

const getStories = () => {
  return [
    require("../stories/ExampleComponent.stories"),
    require("../stories/DesignSystemExampleComponent.stories"),
    // You can require as many stories as you need here
  ];
};

addDecorator(withKnobs);

configure(getStories, module, false);
