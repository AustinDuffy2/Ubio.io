import React from "react";

import { Text } from "components";

const ContactUsHeader46 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
            size="txtAdaminaRegular56"
          >
            {props?.headingtext}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoRegular18"
          >
            {props?.bodytext}
          </Text>
        </div>
      </div>
    </>
  );
};

ContactUsHeader46.defaultProps = {
  headingtext: "Contact Us",
  bodytext:
    "Get in touch with us to learn more about our data-driven real estate search platform.",
};

export default ContactUsHeader46;
