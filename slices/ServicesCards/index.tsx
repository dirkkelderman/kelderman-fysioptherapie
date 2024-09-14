import * as prismic from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

export type ServicesCardsSliceType = SliceComponentProps<Content.ServicesSlice>;

const ServiceCard = ({ item }) => {
  const image = item.image;

  const linkText =
    item.buttonText ||
    `Lees hier meer over ${item.text?.[0]?.text || "deze dienst"}`;

  return (
    <li className="grid gap-8 p-4 hover:bg-slate-100">
      {prismic.isFilled.image(image) && (
        <div className="bg-gray-100">
          <ConditionalWrap
            condition={prismic.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex={-1}>
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage
              field={image}
              className="h-48 w-full object-cover"
              width={800} // Use actual dimensions or aspect ratio
              height={600}
              alt={
                item.image?.alt ||
                `Image related to ${item.text?.[0]?.text || "this service"}`
              } // Descriptive alt text
            />
          </ConditionalWrap>
        </div>
      )}
      <div className="min-h-[50px] flex-grow leading-relaxed">
        <PrismicRichText field={item.text} />
      </div>
      {prismic.isFilled.link(item.buttonLink) && (
        <div className="mb-2 min-h-[50px]">
          <PrismicLink
            field={item.buttonLink}
            className="block w-fit break-words rounded border-2 border-[#183540] px-5 py-2 text-start font-semibold leading-normal text-[#183540] hover:bg-[#183540] hover:text-white"
          >
            {linkText}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const ServicesCards = ({ slice }: ServicesCardsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h6"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <PrismicRichText field={slice.primary.description} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {slice.items.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ServicesCards;
