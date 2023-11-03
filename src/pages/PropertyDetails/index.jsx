import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertyDetailsColumnheading from "components/PropertyDetailsColumnheading";
import PropertyDetailsContent5 from "components/PropertyDetailsContent5";
import PropertyDetailsCta3desktop from "components/PropertyDetailsCta3desktop";
import PropertyDetailsFaq3 from "components/PropertyDetailsFaq3";
import PropertyDetailsGallery5 from "components/PropertyDetailsGallery5";
import PropertyDetailsLayout90 from "components/PropertyDetailsLayout90";
import PropertyDetailsTestimonial14 from "components/PropertyDetailsTestimonial14";
import PropertyDetailsTestimonial5 from "components/PropertyDetailsTestimonial5";

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

const PropertyDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto py-10 w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <PropertyDetailsColumnheading className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertyDetailsContent5 className="bg-white-A700 flex flex-col gap-20 items-start justify-center md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertyDetailsGallery5 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertyDetailsLayout90 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertyDetailsFaq3 className="bg-white-A700 flex flex-col gap-20 items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <PropertyDetailsTestimonial14 className="bg-white-A700 flex flex-col gap-12 items-center justify-start px-5 py-16 w-full" />
        <PropertyDetailsTestimonial5 className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-start justify-start px-2.5 py-28 w-full" />
        <PropertyDetailsCta3desktop
          className="bg-cover bg-no-repeat flex flex-col gap-20 h-[421px] items-start justify-start md:px-10 px-16 sm:px-5 py-28 w-full"
          style={{ backgroundImage: "url('images/img_cta3desktop.png')" }}
        />
        <Footer className="bg-white-A700 flex gap-8 items-center justify-center px-2.5 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
