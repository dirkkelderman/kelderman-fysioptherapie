import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ReviewCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="grid gap-8">
      {prismicH.isFilled.image(image) && (
        <div className="bg-gray-100 ">
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex="-1">
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
      {prismicH.isFilled.link(item.buttonLink) && (
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

const ReviewCards = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid w-full items-center justify-center gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        {prismicH.isFilled.richText(slice.primary.description) && (
          <div className="max-w-lg text-center">
            <PrismicText field={slice.primary.description} />
          </div>
        )}
        <ul className="grid gap-8 lg:grid-cols-2">
          {slice.items.map((item) => (
            <ReviewCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ReviewCards;
