import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";

const components = {
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-1 ">{children}</p>,
};

export const Footer = ({ footer }) => {
  return (
    <Bounded as="footer" yPadding="sm" className="bg-[#183540] text-white">
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-center leading-none md:grid-cols-4 ">
        <div className="flex h-full min-h-[100px] flex-col items-center justify-between">
          <PrismicRichText field={footer.data?.sitemapHeading} />
          <ul className=" list-none">
            {footer.data?.sitemap.map((item, index) => (
              <li key={index} className="tracking-tight text-white">
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col items-center justify-between">
          <PrismicRichText field={footer.data?.locationsHeading} />
          <ul className=" list-none">
            {footer.data?.locations.map((item, index) => (
              <li key={index} className=" pb-2 tracking-tight text-white">
                <PrismicRichText field={item.city} components={components} />
                <PrismicRichText field={item.address} components={components} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.contactHeading} />
          <ul className=" list-none">
            {footer.data?.contact.map((item, index) => (
              <li key={index} className="pb-2 tracking-tight text-white">
                <PrismicRichText field={item.email} components={components} />
                <PrismicRichText
                  field={item.telephone}
                  components={components}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.socialsHeading} />
          <ul className=" list-none">
            {footer.data?.socials.map((item, index) => (
              <li key={index} className=" tracking-tight text-white">
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Bounded>
  );
};
