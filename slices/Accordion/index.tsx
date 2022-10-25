import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.AccordionSlice} AccordionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AccordionSlice>} AccordionProps
 * @param { AccordionProps }
 */

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="">
      {children}
    </Heading>
  ),
};

const AccordionItem = ({ itemHeader, itemContent, index }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-2/3 py-3">
      <button
        className="flex w-full items-center justify-between rounded border-[1px] border-slate-400 p-2"
        onClick={() => setSelected(!selected)}
      >
        <div>
          <PrismicRichText field={itemHeader} components={components} />
        </div>
        <div>{selected ? "-" : "+"}</div>
      </button>
      <div className="">
        <span className="pb-4">
          {selected && (
            <span className="">
              <PrismicRichText field={itemContent} />
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

const Accordion = ({ slice }) => (
  <Bounded as="section" yPadding="sm">
    <PrismicRichText field={slice.primary.heading} />

    <div className="flex flex-col items-center justify-center ">
      {slice.items.map((item, index) => (
        <AccordionItem key={index} index={index} {...item} />
      ))}
    </div>
  </Bounded>
);

export default Accordion;
