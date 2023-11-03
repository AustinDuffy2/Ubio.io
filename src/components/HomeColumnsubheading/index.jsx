import React from "react";

import { Img, List, Text } from "components";

const HomeColumnsubheading = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-full"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingtext}
          </Text>
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRobotoBold36"
            >
              {props?.headingfourtext}
            </Text>
            <Text
              className="text-base text-black-900 text-center w-full"
              size="txtRobotoRegular16"
            >
              {props?.texttwotext}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-full">
            <div className="flex flex-col gap-6 h-[360px] md:h-auto items-start justify-start p-6 sm:px-5 w-[298px]">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[250px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtRobotoBold24"
                  >
                    {props?.headingtext}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[250px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.texttext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
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
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-full">
            <div className="flex flex-col gap-6 h-full items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[261px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtRobotoBold24"
                  >
                    {props?.headingtwotext}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[261px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.texttwotext1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
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
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-full">
            <div className="flex flex-col h-[360px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-6 h-full items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.subheadingtwotext}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[213px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtRobotoBold24"
                    >
                      {props?.headingthreetext}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[213px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.textthreetext}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
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
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomeColumnsubheading.defaultProps = {
  subheadingtext: "Discover",
  headingfourtext: "Unlocking Property Insights Worldwide",
  texttwotext: "Make Informed Decisions with Data-Driven Trend Models",
  headingtext: "Find Your Perfect Property",
  texttext: "Personalized Search Experience for Better Decision-Making",
  button: "Get Started",
  headingtwotext: "Discover Property Insights",
  texttwotext1: "Unlock the Power of Data-Driven Decision-Making",
  button1: "Get Started",
  subheadingtwotext: "Insights",
  headingthreetext: "Data-Driven Decision-Making Tools",
  textthreetext: "Stay Ahead of the Real Estate Market",
  button2: "Get Started",
};

export default HomeColumnsubheading;
