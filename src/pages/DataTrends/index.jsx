import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import ContactUsHeader46 from "components/ContactUsHeader46";
import DataTrendsCta13 from "components/DataTrendsCta13";
import DataTrendsCta8 from "components/DataTrendsCta8";
import DataTrendsLayout16 from "components/DataTrendsLayout16";
import DataTrendsLayout237 from "components/DataTrendsLayout237";
import DataTrendsLayout27 from "components/DataTrendsLayout27";
import DataTrendsTestimonial7 from "components/DataTrendsTestimonial7";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertyDetailsFaq3 from "components/PropertyDetailsFaq3";

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

const DataTrendsPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <ContactUsHeader46
          className="bg-white-A700 flex flex-col gap-20 h-[436px] md:h-auto items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full"
          headingtext="Uncover Property Insights"
          bodytext="Discover valuable data trends to make informed real estate decisions."
        />
        <DataTrendsLayout16 className="bg-white-A700 flex flex-col gap-20 items-start justify-start px-5 py-2.5 w-full" />
        <DataTrendsLayout237 className="bg-white-A700 flex flex-col gap-20 items-center justify-start p-2.5 w-full" />
        <DataTrendsLayout27 className="bg-white-A700 flex flex-col gap-20 items-start justify-start p-5 w-full" />
        <DataTrendsTestimonial7 className="bg-white-A700 flex flex-col gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <DataTrendsCta13 className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start p-2.5 w-full" />
        <DataTrendsCta8 className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start px-2.5 py-28 w-full" />
        <PropertyDetailsFaq3 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default DataTrendsPage;
