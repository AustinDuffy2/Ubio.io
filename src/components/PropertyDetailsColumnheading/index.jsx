import React from "react";

import { Button, Img, Text } from "components";

const PropertyDetailsColumnheading = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center w-full"
                size="txtRobotoBold56"
              >
                {props?.villaheading}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.villadescription}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-center w-full">
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[75px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.exclusivelabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[65px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.modernlabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[74px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.spaciouslabel}
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="h-[738px] md:h-auto object-cover w-full"
          src="images/img_placeholderimage.png"
          alt="placeholderimag"
        />
      </div>
    </>
  );
};

PropertyDetailsColumnheading.defaultProps = {
  villaheading: "Luxury Beachfront Villa",
  villadescription:
    "Stunning oceanfront property with breathtaking views and luxurious amenities",
  exclusivelabel: "Exclusive",
  modernlabel: "Modern",
  spaciouslabel: "Spacious",
};

export default PropertyDetailsColumnheading;
