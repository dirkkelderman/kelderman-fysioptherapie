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

import Carousel from "better-react-carousel";

export type PartnershipsSliceType =
  SliceComponentProps<Content.PartnershipsSlice>;

const PartnershipCard = ({ item }) => {
  const image = item.logo;

  return (
    <li className="grid lg:gap-8">
      {prismic.isFilled.image(image) && (
        <div className="">
          <ConditionalWrap
            condition={prismic.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex={-1}>
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} className="rounded-full" />
          </ConditionalWrap>
        </div>
      )}
      <div className="text-center leading-relaxed">
        <PrismicRichText field={item.partnership} />
      </div>
      {prismic.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink field={item.buttonLink} className="font-semibold">
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
      <div className="grid gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h2"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <Carousel cols={4} rows={1} gap={8} loop autoplay>
          {slice.items.map((item, index) => (
            <Carousel.Item key={index}>
              <PartnershipCard item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Bounded>
  );
};

export default Partnerships;
