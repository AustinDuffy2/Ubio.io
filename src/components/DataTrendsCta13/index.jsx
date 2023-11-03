import React from "react";

import { Button, Text } from "components";

const DataTrendsCta13 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-start justify-start p-2.5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-center p-2.5 w-full">
            <Text
              className="leading-[120.00%] max-w-[675px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtRobotoBold48"
            >
              {props?.headingtext}
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[675px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoRegular18"
              >
                {props?.descriptiontext}
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[96px] outline outline-[1px] outline-white-A700 text-base text-center"
                  shape="round"
                  color="light_blue_400"
                  size="md"
                  variant="fill"
                >
                  {props?.buttonfourtext}
                </Button>
                <Button
                  className="bg-transparent cursor-pointer font-roboto min-w-[96px] outline outline-[1px] teal_A400_blue_400_border6 text-base text-center"
                  shape="round"
                  color="light_blue_400_26"
                  size="md"
                  variant="fill"
                >
                  {props?.buttonfivetext}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DataTrendsCta13.defaultProps = {
  headingtext: "Medium length heading goes here",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttonfourtext: "Button",
  buttonfivetext: "Button",
};

export default DataTrendsCta13;
