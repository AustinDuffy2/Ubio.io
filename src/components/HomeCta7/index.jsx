import React from "react";

import { Button, Text } from "components";

const HomeCta7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-col gap-6 items-center justify-center px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
              size="txtRobotoBold40"
            >
              {props?.headingEight}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.textThree}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center px-5 w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[83px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              {props?.startbuttontext}
            </Button>
            <Button
              className="bg-transparent cursor-pointer font-roboto min-w-[129px] outline outline-[1px] teal_A400_blue_400_border15 text-base text-center"
              shape="round"
              color="light_blue_400_26"
              size="md"
              variant="fill"
            >
              {props?.learnmorebuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeCta7.defaultProps = {
  headingEight: "Discover properties and data trends",
  textThree: "Explore properties and make informed decisions with data",
  startbuttontext: "Start",
  learnmorebuttontext: "Learn More",
};

export default HomeCta7;
