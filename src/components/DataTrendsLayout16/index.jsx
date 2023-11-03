import React from "react";

import { Button, Img, Text } from "components";

const DataTrendsLayout16 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start pb-5 pt-2.5 px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center w-auto"
                    size="txtRobotoSemiBold16"
                  >
                    {props?.tagline}
                  </Text>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                      size="txtRobotoBold48"
                    >
                      {props?.sectionheading}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[1360px] md:max-w-full text-black-900 text-lg"
                      size="txtRobotoRegular18"
                    >
                      {props?.sectiondescription}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start py-2 w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_folder.svg"
                      alt="folder"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.languagetext}
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_folder.svg"
                      alt="folderone"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.languageonetext}
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_folder.svg"
                      alt="foldertwo"
                    />
                    <Text
                      className="flex-1 text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      {props?.languagetwotext}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
                <Button
                  className="bg-transparent cursor-pointer font-roboto min-w-[96px] outline outline-[1px] teal_A400_blue_400_border4 text-base text-center"
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  {props?.buttontwotext}
                </Button>
                <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.buttonthree}
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
          <div className="bg-white-A700 flex flex-col items-start justify-center p-2.5 w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
              <Img
                className="h-[614px] sm:h-auto object-cover w-[475px] md:w-full"
                src="images/img_placeholderimage_344x484.png"
                alt="placeholderimag"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DataTrendsLayout16.defaultProps = {
  tagline: "Tagline",
  sectionheading: "Medium length section heading goes here",
  sectiondescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  languagetext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  languageonetext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  languagetwotext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  buttontwotext: "Button",
  buttonthree: "Button",
};

export default DataTrendsLayout16;
