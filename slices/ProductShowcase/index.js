import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.ProductShowcaseSlice} ProductShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductShowcaseSlice>} ProductShowcaseProps
 * @param { ProductShowcaseProps }
 */
const ProductShowcase = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <PrismicRichText
            className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]"
            field={slice.primary.title}
          />
          <PrismicRichText
            lassName="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]"
            field={slice.primary.description}
          />
        </div>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="mx-auto flex flex-col items-center justify-center space-y-4">
            <PrismicNextImage
              className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
              field={slice.primary.image_1}
            />
            <PrismicRichText field={slice.primary.heading_1} />
            <PrismicRichText field={slice.primary.subtext_1} />
            <p className="text-base font-medium text-green-700 dark:text-green-300"></p>
          </div>
          <div className="mx-auto flex flex-col items-center justify-center space-y-4">
            <PrismicNextImage
              className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
              field={slice.primary.image_2}
            />
            <PrismicRichText field={slice.primary.heading_2} />
            <PrismicRichText field={slice.primary.subtext_2} />
          </div>
          <div className="mx-auto flex flex-col items-center justify-center space-y-4">
            <PrismicNextImage
              className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
              field={slice.primary.image_3}
            />
            <PrismicRichText field={slice.primary.heading_3} />
            <PrismicRichText field={slice.primary.subtext_3} />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          {prismicH.isFilled.link(slice.primary.cta_link) && (
            <PrismicLink
              field={slice.primary.cta_link}
              className="rounded bg-[#9BCD9B] px-8 py-3 font-medium text-slate-800 hover:bg-slate-800 hover:text-[#9BCD9B]"
            >
              {<PrismicRichText field={slice.primary.cta_text} /> ||
                "Maak nu een afspraak"}
            </PrismicLink>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default ProductShowcase;
