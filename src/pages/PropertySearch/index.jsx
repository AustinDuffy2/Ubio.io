import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import DataTrendsCta8 from "components/DataTrendsCta8";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertySearchColumnsubheadingone from "components/PropertySearchColumnsubheadingone";
import PropertySearchFaq3 from "components/PropertySearchFaq3";
import PropertySearchHeader65 from "components/PropertySearchHeader65";
import PropertySearchLayout219 from "components/PropertySearchLayout219";
import PropertySearchLayout233 from "components/PropertySearchLayout233";
import PropertySearchLayout254 from "components/PropertySearchLayout254";

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

const PropertySearchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <PropertySearchHeader65
          className="bg-cover bg-no-repeat flex flex-col gap-20 h-[470px] items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
        />
        <PropertySearchLayout219 className="bg-white-A700 flex flex-col gap-20 items-center justify-start w-full" />
        <PropertySearchLayout254 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-5 w-full" />
        <PropertySearchLayout233 className="bg-white-A700 flex flex-col gap-20 items-start justify-start px-5 py-28 w-full" />
        <DataTrendsCta8 className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start px-2.5 py-28 w-full" />
        <PropertySearchColumnsubheadingone className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertySearchFaq3 className="bg-white-A700 flex flex-col gap-12 items-start justify-start px-5 py-16 w-full" />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default PropertySearchPage;
