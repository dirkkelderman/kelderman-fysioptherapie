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

export type TestimonialsSliceType =
  SliceComponentProps<Content.TestimonialsSlice>;

const TestimonialCard = ({ item }): JSX.Element => {
  const image = item.image;

  return (
    <li className="grid gap-8">
      {prismic.isFilled.image(image) && (
        <div className="w-40">
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
              layout="responsive"
              className="rounded-full"
            />
          </ConditionalWrap>
        </div>
      )}
      <div className="leading-relaxed">
        <PrismicRichText field={item.text} />
      </div>
      <div>
        {prismic.isFilled.keyText(item.source) && (
          <figcaption className="text-right">&mdash; {item.source}</figcaption>
        )}
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

const Testimonials = ({ slice }: TestimonialsSliceType): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismic.isFilled.richText(slice.primary.heading) && (
          <Heading as={"h6"} className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {slice.items.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Testimonials;
