import React from "react";

const sizeClasses = {
  txtRobotoSemiBold16WhiteA700: "font-roboto font-semibold",
  txtRobotoBold48WhiteA700: "font-bold font-roboto",
  txtAdaminaRegular56: "font-adamina font-normal",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular18WhiteA700: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoBold56WhiteA700: "font-bold font-roboto",
  txtRobotoBold48: "font-bold font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoBold36: "font-bold font-roboto",
  txtRobotoBold56: "font-bold font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoRegular12WhiteA700: "font-normal font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
