import React from "react";

import { Button, Img, Text } from "components";

const HomeLayout207 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center p-2.5 w-auto sm:w-full">
            <Img
              className="h-[410px] md:h-auto object-cover w-[355px]"
              src="images/img_placeholderimage_425x685.png"
              alt="placeholderimag_Two"
            />
          </div>
          <div className="bg-white-A700_9e flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtRobotoSemiBold16"
                    >
                      {props?.subheadingtext}
                    </Text>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                        size="txtRobotoBold48"
                      >
                        {props?.headingSix}
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[1135px] md:max-w-full text-black-900 text-lg"
                        size="txtRobotoRegular18"
                      >
                        {props?.descriptiontext}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder"
                      />
                      <Text
                        className="flex-1 text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.listitemonetext}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder_One"
                      />
                      <Text
                        className="flex-1 text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.listitemtwotext}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder_Two"
                      />
                      <Text
                        className="flex-1 text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.listitemthreetext}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
                  <Button
                    className="bg-transparent cursor-pointer font-roboto min-w-[129px] outline outline-[1px] teal_A400_blue_400_border14 text-base text-center"
                    shape="round"
                    color="light_blue_400_26"
                    size="md"
                    variant="fill"
                  >
                    {props?.learnmorebuttontext}
                  </Button>
                  <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.buttonFour}
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeLayout207.defaultProps = {
  subheadingtext: "Revolutionary",
  headingSix: "Discover Properties Like Never Before",
  descriptiontext:
    "Our data-driven real estate search platform provides unparalleled insights and tools for property buyers, sellers, and investors. With our advanced data trend models and property search tools, you can make better business decisions and stay ahead of the competition.",
  listitemonetext: "Find Your Dream Property Anywhere in the World",
  listitemtwotext: "Sell Your Property Quickly and Profitably",
  listitemthreetext: "Invest Smarter with Data-Driven Insights",
  learnmorebuttontext: "Learn More",
  buttonFour: "Sign Up",
};

export default HomeLayout207;
