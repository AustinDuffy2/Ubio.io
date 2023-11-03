import React from "react";

import { Button, Img, List, Text } from "components";

const PropertySearchLayout233 = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="bg-white-A700 sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start p-2.5 w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[453px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[453px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="bg-transparent cursor-pointer font-roboto min-w-[101px] outline outline-[1px] teal_A400_blue_400_border10 text-base text-center"
                shape="round"
                color="light_blue_400_26"
                size="md"
                variant="fill"
              >
                {props?.explore}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.button2}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[453px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[453px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text1}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="bg-transparent cursor-pointer font-roboto min-w-[101px] outline outline-[1px] teal_A400_blue_400_border11 text-base text-center"
                shape="round"
                color="light_blue_400_26"
                size="md"
                variant="fill"
              >
                {props?.explore1}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.button2}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[453px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32"
                >
                  {props?.heading2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[453px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.text2}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="bg-transparent cursor-pointer font-roboto min-w-[101px] outline outline-[1px] teal_A400_blue_400_border12 text-base text-center"
                shape="round"
                color="light_blue_400_26"
                size="md"
                variant="fill"
              >
                {props?.explore2}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.button2}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

PropertySearchLayout233.defaultProps = {
  heading: "Data-Driven Trend Models and Insights",
  text: "Discover the latest trends and insights in the real estate market with our data-driven models.",
  explore: "Explore",
  button: "Learn More",
  heading1: "Data-Driven Trend Models and Insights",
  text1:
    "Discover the latest trends and insights in the real estate market with our data-driven models.",
  explore1: "Explore",
  button1: "Learn More",
  heading2: "Data-Driven Trend Models and Insights",
  text2:
    "Discover the latest trends and insights in the real estate market with our data-driven models.",
  explore2: "Explore",
  button2: "Learn More",
};

export default PropertySearchLayout233;
