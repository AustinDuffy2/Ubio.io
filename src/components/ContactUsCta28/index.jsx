import React from "react";

import { Button, Input, Text } from "components";

const ContactUsCta28 = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
      >
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
              size="txtRobotoBold48WhiteA700"
            >
              {props?.headingfive}
            </Text>
            <Text
              className="text-center text-lg text-white-A700 w-full"
              size="txtRobotoRegular18WhiteA700"
            >
              {props?.textthree}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 w-full">
            <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-full">
              <Input
                name="textinputtwo"
                placeholder="Enter your email"
                className="!placeholder:text-gray-800 !text-gray-800 font-roboto p-0 text-base text-left w-full"
                wrapClassName="flex-1 md:flex-1 outline outline-[1px] outline-blue_gray-400 w-[26%] md:w-full"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Button
                className="!text-white-A700 cursor-pointer flex-1 font-roboto outline outline-[1px] outline-white-A700 text-base text-center w-full"
                shape="round"
                color="light_blue_400"
                size="md"
                variant="fill"
              >
                {props?.signupbutton}
              </Button>
            </div>
          </div>
        </div>
        <Text
          className="text-white-A700 text-xs w-full"
          size="txtRobotoRegular12WhiteA700"
        >
          {props?.termandcondition}
        </Text>
      </div>
    </>
  );
};

ContactUsCta28.defaultProps = {
  headingfive: "Contact Our Sales Team Today",
  textthree:
    "For more information or to sign up, please fill out the form below.",
  signupbutton: "Sign Up",
  termandcondition:
    "By clicking Sign Up, you agree to our Terms and Conditions.",
};

export default ContactUsCta28;
