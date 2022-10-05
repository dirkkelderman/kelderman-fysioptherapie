import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const PartnershipCard = ({ item }) => {
  const image = item.logo;

  return (
    <li className="grid gap-8">
      {prismicH.isFilled.image(image) && (
        <div className="">
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} layout="responsive" className="rounded-full" />
          </ConditionalWrap>
        </div>
      )}
      <div className="leading-relaxed text-center">
        <PrismicRichText field={item.partnership} />
      </div>
      {prismicH.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink field={item.buttonLink} className="font-semibold">
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const Partnerships = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className="grid grid-cols-3 gap-8 md:grid-cols-5">
          {slice.items.map((item, index) => (
            <PartnershipCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Partnerships