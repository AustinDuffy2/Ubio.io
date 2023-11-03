import React from "react";

import { Img, Text } from "components";

const PropertyDetailsContent5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoBold48"
            >
              {props?.userheading}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[748px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.userdescriptionone}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[748px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.userdescriptiontwo}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] max-w-[748px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.userdescriptionthree}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-8 h-[1098px] md:h-auto items-start justify-start w-[484px] sm:w-full">
            <Img
              className="md:h-[344px] sm:h-auto h-full object-cover w-[484px] md:w-full"
              src="images/img_placeholderimage_344x484.png"
              alt="placeholderimag_One"
            />
            <Img
              className="md:h-[344px] sm:h-auto h-full object-cover w-[484px] md:w-full"
              src="images/img_placeholderimage_344x484.png"
              alt="placeholderimag_Two"
            />
            <Img
              className="md:h-[344px] sm:h-auto h-full object-cover w-[484px] md:w-full"
              src="images/img_placeholderimage_344x484.png"
              alt="placeholderimag_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsContent5.defaultProps = {
  userheading: "Short heading goes here",
  userdescriptionone:
    "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  userdescriptiontwo:
    "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  userdescriptionthree:
    "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",
};

export default PropertyDetailsContent5;
