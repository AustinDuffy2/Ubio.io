import React from "react";

import { Input } from "components";

export default {
  title: "ubioio/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder5",
  variant: "OutlineBluegray400",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
