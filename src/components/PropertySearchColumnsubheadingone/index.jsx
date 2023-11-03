import React from "react";

import { Img, List, Text } from "components";

const PropertySearchColumnsubheadingone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-full"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingone}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoBold48"
            >
              {props?.headingfive}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.texttwo}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-[298px]">
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
                    {props?.userheading}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[250px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.usertext}
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
          <div className="bg-white-A700 flex flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-[309px]">
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
                    {props?.userheadingtwo}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[261px] md:max-w-full text-base text-black-900"
                    size="txtRobotoRegular16"
                  >
                    {props?.usertexttwo}
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
          <div className="bg-white-A700 flex flex-col h-[360px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900 w-[309px]">
            <div className="flex flex-col h-[360px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-6 h-full items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.usersubheading}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[213px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtRobotoBold24"
                    >
                      {props?.userheadingthree}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[213px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.usertextthree}
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

PropertySearchColumnsubheadingone.defaultProps = {
  subheadingone: "Tagline",
  headingfive: "Short heading goes here",
  texttwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  userheading: "Find Your Perfect Property",
  usertext: "Personalized Search Experience for Better Decision-Making",
  button: "Get Started",
  userheadingtwo: "Discover Property Insights",
  usertexttwo: "Unlock the Power of Data-Driven Decision-Making",
  button1: "Get Started",
  usersubheading: "Insights",
  userheadingthree: "Data-Driven Decision-Making Tools",
  usertextthree: "Stay Ahead of the Real Estate Market",
  button2: "Get Started",
};

export default PropertySearchColumnsubheadingone;
