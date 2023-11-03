import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Line className="bg-white-A700 h-px w-full" />
        <div className="flex flex-1 flex-col items-center justify-start w-full">
          <Line className="bg-white-A700 h-px w-full" />
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
            <div className="flex flex-1 flex-col items-center justify-center p-2.5 w-full">
              <div className="flex flex-col items-center justify-center p-2.5 w-full">
                <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between px-5 w-full">
                  <Img
                    className="h-[27px] w-[63px]"
                    src="images/img_logo.svg"
                    alt="logo"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    Link One
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    Link Two
                  </Text>
                  <Text
                    className="text-base text-black-900 w-[74px]"
                    size="txtRobotoRegular16"
                  >
                    Link Three
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start w-[220px]">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Link Four
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2.5 w-auto">
              <div className="flex flex-row gap-4 items-center justify-end w-auto">
                <Button
                  className="cursor-pointer font-roboto min-w-[88px] outline outline-[1px] outline-black-900 text-base text-center"
                  shape="round"
                  color="light_blue_400_26"
                  size="sm"
                  variant="fill"
                >
                  Button
                </Button>
                <Button
                  className="cursor-pointer font-roboto min-w-[88px] outline outline-[1px] outline-black-900 text-base text-center"
                  shape="round"
                  color="black_900"
                  size="sm"
                  variant="fill"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
