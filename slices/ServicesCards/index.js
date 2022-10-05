import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ServiceCard = ({ item }) => {
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
            {item.buttonText || "Meer info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const ServicesCards = ({ slice }) => {
  console.log(slice);
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid  auto-cols-[minmax(3,4)] gap-8 md:grid-flow-col">
          {slice.items.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ServicesCards;
