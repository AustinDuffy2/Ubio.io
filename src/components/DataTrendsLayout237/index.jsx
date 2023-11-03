import React from "react";

import { Button, Img, List, Text } from "components";

const DataTrendsLayout237 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-end p-2.5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoSemiBold16"
            >
              {props?.usertagline}
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoBold48"
              >
                {props?.userheadingone}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1400px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoRegular18"
              >
                {props?.userdescriptionone}
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-2.5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2.5 w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-[405px] sm:w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_iconrelume.svg"
                      alt="iconrelume"
                    />
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <Text
                        className="leading-[130.00%] max-w-[405px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                        size="txtRobotoBold32"
                      >
                        {props?.userheadingtwo}
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[405px] md:max-w-full text-base text-black-900 text-center"
                        size="txtRobotoRegular16"
                      >
                        {props?.userdescriptiontwo}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2.5 w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-[405px] sm:w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_iconrelume.svg"
                      alt="iconrelume"
                    />
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <Text
                        className="leading-[130.00%] max-w-[405px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                        size="txtRobotoBold32"
                      >
                        {props?.userheadingthree}
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[405px] md:max-w-full text-base text-black-900 text-center"
                        size="txtRobotoRegular16"
                      >
                        {props?.userdescriptionthree}
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-[405px] sm:w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_iconrelume.svg"
                    alt="iconrelume"
                  />
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="leading-[130.00%] max-w-[405px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtRobotoBold32"
                    >
                      {props?.headingtwo}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[405px] md:max-w-full text-base text-black-900 text-center"
                      size="txtRobotoRegular16"
                    >
                      {props?.descriptionTwo}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
            <Button
              className="bg-transparent cursor-pointer font-roboto min-w-[96px] outline outline-[1px] teal_A400_blue_400_border5 text-base text-center"
              shape="round"
              color="light_blue_400_26"
              size="md"
              variant="fill"
            >
              {props?.userbuttonthree}
            </Button>
            <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.buttonfive}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowrightone"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DataTrendsLayout237.defaultProps = {
  usertagline: "Tagline",
  userheadingone: "Medium length section heading goes here",
  userdescriptionone:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  userbuttonthree: "Button",
  buttonfive: "Button",
};

export default DataTrendsLayout237;
