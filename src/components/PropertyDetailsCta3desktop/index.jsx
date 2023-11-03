import React from "react";

import { Button, Text } from "components";

const PropertyDetailsCta3desktop = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
      >
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
              size="txtRobotoBold48WhiteA700"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-lg text-white-A700 w-full"
              size="txtRobotoRegular18WhiteA700"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pt-4 w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[114px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              {props?.schedulebuttontext}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[97px] text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="outline"
            >
              {props?.inquirebuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsCta3desktop.defaultProps = {
  headingtext: "Find Your Dream Property Today",
  descriptiontext:
    "Explore our extensive collection of properties and find your perfect match.",
  schedulebuttontext: "Schedule",
  inquirebuttontext: "Inquire",
};

export default PropertyDetailsCta3desktop;
