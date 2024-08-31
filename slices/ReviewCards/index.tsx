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

export type ReviewCardsSliceType =
  SliceComponentProps<Content.ReviewCardsSlice>;

const ReviewCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="grid gap-8">
      {prismic.isFilled.image(image) && (
        <div className="bg-gray-100 ">
          <ConditionalWrap
            condition={prismic.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex={-1}>
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} layout="responsive" className="" />
          </ConditionalWrap>
        </div>
      )}
      <div className="leading-relaxed">
        <PrismicRichText field={item.text} />
      </div>
      {prismic.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink
            field={item.buttonLink}
            className="rounded bg-[#183540] px-5 py-3 font-semibold text-white"
          >
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const ReviewCards = ({ slice }: ReviewCardsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid w-full items-center justify-center gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h6"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        {prismic.isFilled.richText(slice.primary.description) && (
          <div className="max-w-lg text-center">
            <PrismicText field={slice.primary.description} />
          </div>
        )}
        <ul className="grid gap-8 lg:grid-cols-2">
          {slice.items.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ReviewCards;
