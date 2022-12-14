import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const LocationCard = ({ item }) => {
  const image = item.image;

  return (
    <li className="flex w-full justify-center">
      <div className="w-full p-10">
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100">
            <ConditionalWrap
              condition={prismicH.isFilled.link(item.buttonLink)}
              wrap={({ children }) => (
                <PrismicLink field={item.buttonLink} tabIndex="-1">
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
        {prismicH.isFilled.link(item.buttonLink) && (
          <div>
            <PrismicLink field={item.buttonLink} className="font-semibold">
              {item.buttonText || "More Info"}
            </PrismicLink>
          </div>
        )}
      </div>
    </li>
    // <li className="grid max-w-sm gap-8 bg-red-100">
    // {prismicH.isFilled.image(image) && (
    //   <div className="bg-gray-100">
    //     <ConditionalWrap
    //       condition={prismicH.isFilled.link(item.buttonLink)}
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
    // {prismicH.isFilled.link(item.buttonLink) && (
    //   <div>
    //     <PrismicLink field={item.buttonLink} className="font-semibold">
    //       {item.buttonText || "More Info"}
    //     </PrismicLink>
    //   </div>
    // )}
    // </li>
  );
};

const LocationCards = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
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
