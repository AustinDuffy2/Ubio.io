import React from "react";

import { Button, Text } from "components";

const PropertySearchHeader65 = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
      >
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtRobotoSemiBold16WhiteA700"
            >
              {props?.usertagline}
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-full"
                size="txtRobotoBold56WhiteA700"
              >
                {props?.userheading}
              </Text>
              <Text
                className="text-center text-lg text-white-A700 w-full"
                size="txtRobotoRegular18WhiteA700"
              >
                {props?.userdescription}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              {props?.usersearchlabel}
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_400"
              size="md"
              variant="outline"
            >
              {props?.userlearnmorelabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertySearchHeader65.defaultProps = {
  usertagline: "Revolutionize",
  userheading: "Find Your Dream Home",
  userdescription:
    "Explore properties across the world and make better business decisions with our data-driven search platform.",
  usersearchlabel: "Search",
  userlearnmorelabel: "Learn More",
};

export default PropertySearchHeader65;
