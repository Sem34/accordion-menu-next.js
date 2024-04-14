import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="Menu button"
        item="One"
        itemTwo="two"
        itemThree="Three"
      />
       <Accordion
        title="Menu button 2"
        item="One"
        itemTwo="two"
        itemThree="Three"
      />
      <Accordion
        title="Menu button 3"
        item="One"
        itemTwo="two"
        itemThree="Three"
      />
    </div>
  );
};

export default FAQ;
