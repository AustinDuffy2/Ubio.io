import React from "react";

import { Img, Text } from "components";

const PropertyDetailsGallery5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
            size="txtRobotoBold48"
          >
            {props?.headingtwo}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.textone}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[99%]">
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
            <Img
              className="h-[360px] md:h-auto object-cover w-full"
              src="images/img_card.png"
              alt="card"
            />
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsGallery5.defaultProps = {
  headingtwo: "Property Gallery",
  textone: "Explore stunning photos, floor plans, and virtual tours.",
};

export default PropertyDetailsGallery5;
