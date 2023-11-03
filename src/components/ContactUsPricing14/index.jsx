import React from "react";

import { Button, Img, List, Text } from "components";

const ContactUsPricing14 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-full"
              size="txtRobotoSemiBold16"
            >
              {props?.subheadingthree}
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoBold48"
              >
                {props?.headingfour}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.texttwo}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <Button
              className="cursor-pointer font-roboto min-w-[106px] text-base text-center"
              shape="square"
              color="black_900"
              size="sm"
              variant="fill"
            >
              {props?.monthlyplan}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-roboto min-w-[92px] text-base text-center"
              shape="square"
              color="black_900"
              size="sm"
              variant="outline"
            >
              {props?.yearlyplan}
            </Button>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
          orientation="horizontal"
        >
          <div className="border border-black-900 border-solid flex flex-1 flex-col gap-8 h-[479px] md:h-auto items-center justify-between p-8 sm:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
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
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_check.svg"
                    alt="checkone"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.textone}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_check.svg"
                    alt="checktwo"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.texttwo1}
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-roboto outline outline-[1px] outline-black-900 text-base text-center w-full"
              shape="round"
              color="black_900"
              size="md"
              variant="fill"
            >
              {props?.getstartedbasic}
            </Button>
          </div>
          <div className="border border-black-900 border-solid flex flex-1 flex-col gap-8 items-center justify-start p-8 sm:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
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
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_check.svg"
                    alt="checkone"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.textone1}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_check.svg"
                    alt="checktwo"
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
                    alt="checkthree"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.textthree}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_check.svg"
                    alt="checkfour"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.textfour}
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-roboto outline outline-[1px] outline-black-900 text-base text-center w-full"
              shape="round"
              color="black_900"
              size="md"
              variant="fill"
            >
              {props?.getstartedbusiness}
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

ContactUsPricing14.defaultProps = {
  subheadingthree: "Discover",
  headingfour: "Subscription Plans",
  texttwo: "Choose the right plan for your needs",
  monthlyplan: "Monthly",
  yearlyplan: "Yearly",
  heading: "Basic Plan",
  price: (
    <Text
      className="text-black-900 text-center text-xl w-auto"
      size="txtRobotoBold20"
    >
      <span className="md:text-5xl sm:text-[42px] text-black-900 font-adamina text-[56px] font-normal">
        $19
      </span>
      <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-bold">
        /mo
      </span>
    </Text>
  ),
  text: "Unlock Property Insights",
  textone: "Advanced Data Analytics",
  texttwo1: "Customizable Search Filters",
  getstartedbasic: "Get started",
  heading1: "Business Plan",
  price1: (
    <Text
      className="text-black-900 text-center text-xl w-auto"
      size="txtRobotoBold20"
    >
      <span className="md:text-5xl sm:text-[42px] text-black-900 font-adamina text-[56px] font-normal">
        $29
      </span>
      <span className="md:text-3xl sm:text-[28px] text-black-900 font-roboto text-[32px] font-bold">
        /mo
      </span>
    </Text>
  ),
  text1: "All Basic Plan Features",
  textone1: "Advanced Market Analysis",
  texttwo2: "Competitor Insights",
  textthree: "Collaboration Tools",
  textfour: "Priority Support",
  getstartedbusiness: "Get started",
};

export default ContactUsPricing14;
