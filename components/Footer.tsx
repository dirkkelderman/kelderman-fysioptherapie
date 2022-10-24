import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

export const Footer = ({ footer }) => {
  return (
    <Bounded as="footer" yPadding="sm" className="bg-[#183540] text-white">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-center leading-none md:grid-cols-4 ">
        <div className="flex h-full flex-col justify-between">
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
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.locationsHeading} />
          <ul className=" list-none">
            {footer.data?.locations.map((item, index) => (
              <li key={index} className=" tracking-tight text-white">
                <PrismicRichText field={item.city} />
                <PrismicRichText field={item.address} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.contactHeading} />
          <ul className=" list-none">
            {footer.data?.contact.map((item, index) => (
              <li key={index} className="tracking-tight text-white">
                <PrismicRichText field={item.email} />
                <PrismicRichText field={item.telephone} />
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
