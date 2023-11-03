import React from "react";

import { Button, Text } from "components";

const AboutUsCta19 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoBold48"
            >
              {props?.headingseven}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.texttwo}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[129px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              {props?.learnmoretext}
            </Button>
            <Button
              className="cursor-pointer font-roboto min-w-[103px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400_26"
              size="md"
              variant="fill"
            >
              {props?.signuptext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsCta19.defaultProps = {
  headingseven: "Discover the Power of AI",
  texttwo:
    "Explore our AI-driven real estate search platform and unlock valuable insights.",
  learnmoretext: "Learn More",
  signuptext: "Sign Up",
};

export default AboutUsCta19;
