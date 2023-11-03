import React from "react";

import { Button, Img, List, Text } from "components";

const HomePricing23 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-full"
              size="txtRobotoSemiBold16"
            >
              {props?.subheadingThree}
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoBold48"
              >
                {props?.headingSeven}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.language}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center w-full">
            <Button
              className="cursor-pointer font-roboto min-w-[106px] text-base text-center"
              shape="square"
              color="black_900"
              size="sm"
              variant="fill"
            >
              {props?.monthly}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-roboto min-w-[92px] text-base text-center"
              shape="square"
              color="black_900"
              size="sm"
              variant="outline"
            >
              {props?.yearly}
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start px-2.5 py-10 w-full">
          <List
            className="sm:flex-col flex-row md:gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between p-2.5 w-full"
            orientation="horizontal"
          >
            <div className="border border-black-900 border-solid flex flex-1 flex-col gap-8 items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col gap-8 h-[335px] md:h-auto items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-xl w-auto"
                    size="txtRobotoBold20"
                  >
                    {props?.heading}
                  </Text>
                  {props?.price}
                </div>
                <div className="flex flex-col gap-4 items-start justify-start py-2 w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.text}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_One"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textOne}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Two"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textTwo}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-roboto outline outline-[1px] outline-black-900 rounded-[24px] text-base text-center w-full"
                color="black_900"
                size="md"
                variant="fill"
              >
                {props?.getStartedToday}
              </Button>
            </div>
            <div className="border border-black-900 border-solid flex flex-1 flex-col gap-8 items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col gap-8 h-[335px] md:h-auto items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-xl w-auto"
                    size="txtRobotoBold20"
                  >
                    {props?.heading1}
                  </Text>
                  {props?.price1}
                </div>
                <div className="flex flex-col gap-4 items-start justify-start py-2 w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.text1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_One"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textone1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Two"
                    />
                    <Text
                      className="flex-1 leading-[150.00%] max-w-[192px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.texttwo1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Three"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textThree}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-roboto outline outline-[1px] outline-black-900 rounded-[24px] text-base text-center w-full"
                color="black_900"
                size="md"
                variant="fill"
              >
                {props?.getstartedtoday1}
              </Button>
            </div>
            <div className="border border-black-900 border-solid flex flex-1 flex-col gap-8 items-center justify-start p-8 sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-black-900 text-center text-xl w-auto"
                    size="txtRobotoBold20"
                  >
                    {props?.heading2}
                  </Text>
                  {props?.price2}
                </div>
                <div className="flex flex-col gap-4 items-start justify-start py-2 w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.text2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_One"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textone2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Two"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.texttwo2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Three"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textthree1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_check.svg"
                      alt="check_Four"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.textFour}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-roboto outline outline-[1px] outline-black-900 rounded-[24px] text-base text-center w-full"
                color="black_900"
                size="md"
                variant="fill"
              >
                {props?.getstartedtoday2}
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HomePricing23.defaultProps = {
  subheadingThree: "Tagline",
  headingSeven: "Pricing plan",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  monthly: "Monthly",
  yearly: "Yearly",
  heading: "Basic Plan",
  price: (
    <Text
      className="text-black-900 text-center text-xl w-auto"
      size="txtRobotoBold20"
    >
      <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px] font-bold">
        $19
      </span>
      <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-bold">
        /mo
      </span>
    </Text>
  ),
  text: "Unlock Premium Features",
  textOne: "Access Exclusive Data",
  textTwo: "Customize Your Search",
  getStartedToday: "Get Started Today",
  heading1: "Business Plan",
  price1: (
    <Text
      className="text-black-900 text-center text-xl w-auto"
      size="txtRobotoBold20"
    >
      <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px] font-bold">
        $29
      </span>
      <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-bold">
        /mo
      </span>
    </Text>
  ),
  text1: "Advanced Analytics Tools",
  textone1: "Real-Time Market Insights",
  texttwo1: "Collaborate with Team Members",
  textThree: "24/7 Customer Support",
  getstartedtoday1: "Get Started Today",
  heading2: "Enterprise Plan",
  price2: (
    <Text
      className="text-black-900 text-center text-xl w-auto"
      size="txtRobotoBold20"
    >
      <span className="md:text-5xl sm:text-[42px] text-black-900 font-roboto text-[56px] font-bold">
        $49
      </span>
      <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-bold">
        /mo
      </span>
    </Text>
  ),
  text2: "Advanced Data Visualization",
  textone2: "Predictive Analytics",
  texttwo2: "Custom API Integration",
  textthree1: "Dedicated Account Manager",
  textFour: "Priority Support",
  getstartedtoday2: "Get Started Today",
};

export default HomePricing23;
