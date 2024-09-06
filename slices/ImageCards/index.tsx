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

export type ImageCardsSliceType = SliceComponentProps<Content.ImageCardsSlice>;

const ImageCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="flex flex-col gap-8">
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
              className=" h-72 w-full object-cover"
              field={image}
            />
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
            className="font-semibold underline-offset-8 hover:underline"
          >
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const ImageCards = ({ slice }: ImageCardsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h3"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
