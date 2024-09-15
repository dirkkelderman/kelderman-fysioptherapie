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

export type PartnershipsSliceType =
  SliceComponentProps<Content.PartnershipsSlice>;

const PartnershipCard = ({ item }) => {
  const image = item.logo;

  return (
    <li className=" ">
      {prismic.isFilled.image(image) && (
        <div className="mb-4 flex-shrink-0">
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
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              alt=""
              height={48}
              width={158}
            />
          </ConditionalWrap>
        </div>
      )}
      <div className="flex-grow text-center">
        <PrismicRichText field={item.partnership} />
      </div>
      {prismic.isFilled.link(item.buttonLink) && (
        <div className="mt-2">
          <PrismicLink
            field={item.buttonLink}
            className="font-semibold text-blue-600 hover:underline"
          >
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const Partnerships = ({ slice }: PartnershipsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 gap-12 ">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as="h2" className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-12 sm:max-w-xl  sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
              {slice.items.map((item, index) => (
                <PartnershipCard item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Partnerships;
