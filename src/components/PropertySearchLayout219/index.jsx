import React from "react";

import { Button, Img, Text } from "components";

const PropertySearchLayout219 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-start justify-start px-2.5 py-20 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-start justify-center p-2.5 w-full">
            <Text
              className="leading-[120.00%] max-w-[685px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtRobotoBold48"
            >
              {props?.headingtext}
            </Text>
            <Img
              className="h-[425px] sm:h-auto object-cover w-full"
              src="images/img_placeholderimage_425x685.png"
              alt="placeholderimag"
            />
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] max-w-[685px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.headingonetext}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.listitemtext}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_iconrelume.svg"
                        alt="iconrelumeone"
                      />
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        {props?.headingtwotext}
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[685px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        {props?.textonetext}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start pt-4 w-full">
                <Button
                  className="bg-transparent cursor-pointer font-roboto min-w-[129px] outline outline-[1px] teal_A400_blue_400_border8 text-base text-center"
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  {props?.getstartedtext}
                </Button>
                <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.learnmoretext}
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
      </div>
    </>
  );
};

PropertySearchLayout219.defaultProps = {
  headingtext: "Find Your Dream Property with AI-Powered Search",
  descriptiontext:
    "Our AI-driven search tools and filters provide a personalized experience, allowing you to easily find properties that match your criteria. With our data trend models, you can make informed decisions and stay ahead of the market.",
  headingonetext: "Smart Search",
  listitemtext:
    "Explore thousands of properties worldwide and discover your perfect investment opportunity.",
  headingtwotext: "Advanced Filters",
  textonetext:
    "Refine your search with our advanced filters to find properties that meet your specific requirements.",
  getstartedtext: "Get Started",
  learnmoretext: "Learn More",
};

export default PropertySearchLayout219;
