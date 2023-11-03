import React from "react";
import { CheckBox } from "components";

export default {
  title: "ubioio/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "RoundedBorder5",
  variant: "OutlineBluegray400",
  label: "Checkbox",
  inputClassName: "mr-1",
};
