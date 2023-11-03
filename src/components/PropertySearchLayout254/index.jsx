import React from "react";

import { Button, Img, List, Text } from "components";

const PropertySearchLayout254 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-full"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoBold48"
            >
              {props?.headingthree}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.descriptionOne}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <List
              className="flex flex-col gap-16 items-center w-[303px] md:w-full"
              orientation="vertical"
            >
              <div className="flex flex-col gap-6 items-center justify-start my-0 w-60">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[240px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start my-0 w-60">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    {props?.heading1}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[240px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-center w-full">
            <Img
              className="h-[540px] md:h-auto object-cover rounded-bl-[25px] rounded-br-[25px] w-full"
              src="images/img_placeholderimage_540x424.png"
              alt="placeholderimag_One"
            />
            <div className="flex flex-row gap-6 h-16 md:h-auto items-center justify-start pt-4 w-full">
              <Button
                className="!text-black-900 bg-transparent cursor-pointer font-roboto min-w-[129px] outline outline-[1px] rounded-[24px] teal_A400_blue_400_border9 text-base text-center"
                color="white_A700"
                size="md"
                variant="fill"
              >
                {props?.learnmorebuttontext}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[12px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.signupbuttontext}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowrightone"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <List
              className="flex flex-col gap-16 items-center w-[303px] md:w-full"
              orientation="vertical"
            >
              <div className="flex flex-col gap-6 items-center justify-start my-0 w-60">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    {props?.heading2}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[240px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text2}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start my-0 w-60">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    {props?.heading3}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[240px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text3}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

PropertySearchLayout254.defaultProps = {
  subheading: "Simplified",
  headingthree: "Find Your Dream Property with Ease",
  descriptionOne:
    "Discover your perfect property using our advanced search criteria. Filter by location, property type, price range, and more.",
  heading: "Trend Models",
  text: "Get access to data-driven trend models that reveal valuable insights about the real estate market.",
  heading1: "User-Friendly",
  text1:
    "Our platform offers a user-friendly interface designed to make your property search effortless.",
  learnmorebuttontext: "Learn More",
  signupbuttontext: "Sign Up",
  heading2: "Personalized Search",
  text2:
    "Experience a personalized search journey tailored to your unique preferences and requirements.",
  heading3: "Better Decisions",
  text3:
    "Make informed business decisions with our comprehensive data and analytics.",
};

export default PropertySearchLayout254;
