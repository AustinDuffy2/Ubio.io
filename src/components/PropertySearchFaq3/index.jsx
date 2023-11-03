import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const titleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titleoneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titletwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titlethreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const titlefourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PropertySearchFaq3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-center p-2.5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoBold48"
                >
                  {props?.faqs}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[665px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoRegular18"
                >
                  {props?.textthree}
                </Text>
              </div>
              <Button
                className="bg-transparent cursor-pointer font-roboto min-w-[104px] outline outline-[1px] teal_A400_blue_400_border13 text-base text-center"
                shape="round"
                color="light_blue_400_26"
                size="md"
                variant="fill"
              >
                {props?.contact}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-2.5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900 h-px w-full" />
                <SelectBox
                  className="font-bold font-roboto text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="title"
                  options={titleOptionsList}
                  isSearchable={false}
                  placeholder="Question text goes here"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900 h-px w-full" />
                <SelectBox
                  className="font-bold font-roboto text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="titleone"
                  options={titleoneOptionsList}
                  isSearchable={false}
                  placeholder="Question text goes here"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900 h-px w-full" />
                <SelectBox
                  className="font-bold font-roboto text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="titletwo"
                  options={titletwoOptionsList}
                  isSearchable={false}
                  placeholder="Question text goes here"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900 h-px w-full" />
                <SelectBox
                  className="font-bold font-roboto text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="titlethree"
                  options={titlethreeOptionsList}
                  isSearchable={false}
                  placeholder="Question text goes here"
                  size="xs"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-black-900 h-px w-full" />
                <SelectBox
                  className="font-bold font-roboto text-black-900 text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="titlefour"
                  options={titlefourOptionsList}
                  isSearchable={false}
                  placeholder="Question text goes here"
                  size="xs"
                />
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertySearchFaq3.defaultProps = {
  faqs: "FAQs",
  textthree:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  contact: "Contact",
};

export default PropertySearchFaq3;
