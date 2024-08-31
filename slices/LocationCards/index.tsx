import * as prismic from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

import { Content } from "@prismicio/client";

export type LocationCardsSliceType =
  SliceComponentProps<Content.LocationCardsSlice>;

const LocationCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="flex w-full justify-center">
      <div className="w-full p-10">
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
              <PrismicNextImage field={image} layout="responsive" />
            </ConditionalWrap>
          </div>
        )}
        <div className="pt-10 leading-relaxed">
          <PrismicRichText field={item.text} />
        </div>
        {prismic.isFilled.link(item.buttonLink) && (
          <div>
            <PrismicLink field={item.buttonLink} className="font-semibold">
              {item.buttonText || "More Info"}
            </PrismicLink>
          </div>
        )}
      </div>
    </li>
    // <li className="grid max-w-sm gap-8 bg-red-100">
    // {prismic.isFilled.image(image) && (
    //   <div className="bg-gray-100">
    //     <ConditionalWrap
    //       condition={prismic.isFilled.link(item.buttonLink)}
    //       wrap={({ children }) => (
    //         <PrismicLink field={item.buttonLink} tabIndex="-1">
    //           {children}
    //         </PrismicLink>
    //       )}
    //     >
    //       <PrismicNextImage field={image} layout="responsive" />
    //     </ConditionalWrap>
    //   </div>
    // )}
    // <div className="leading-relaxed">
    //   <PrismicRichText field={item.text} />
    // </div>
    // {prismic.isFilled.link(item.buttonLink) && (
    //   <div>
    //     <PrismicLink field={item.buttonLink} className="font-semibold">
    //       {item.buttonText || "More Info"}
    //     </PrismicLink>
    //   </div>
    // )}
    // </li>
  );
};

const LocationCards = ({ slice }: LocationCardsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h3"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid lg:grid-cols-2	">
          {slice.items.map((item) => (
            <LocationCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default LocationCards;
