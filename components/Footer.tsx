import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { Bounded } from "./Bounded";
import { Heading } from "./Heading";

// Simple skeleton loader component for text
const SkeletonLoader = ({ height }) => (
  <div
    className={`animate-pulse bg-gray-300`}
    style={{ height: height || "20px" }}
  ></div>
);

const components = {
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="min-h-[40px]">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-1">{children}</p>,
};

export const Footer = ({ footer }) => {
  return (
    <Bounded as="footer" yPadding="sm" className="bg-[#183540] text-white">
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-center leading-none md:grid-cols-4">
        {/* Sitemap */}
        <div className="flex h-full min-h-[200px] flex-col items-center justify-between">
          {footer.data?.sitemapHeading ? (
            <PrismicRichText field={footer.data.sitemapHeading} />
          ) : (
            <SkeletonLoader height="40px" /> // Skeleton loader for heading
          )}
          <ul className="min-h-[150px] list-none">
            {footer.data?.sitemap ? (
              footer.data.sitemap.map((item, index) => (
                <li key={index} className="tracking-tight text-white">
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))
            ) : (
              <>
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
              </>
            )}
          </ul>
        </div>

        {/* Locations */}
        <div className="flex h-full min-h-[200px] flex-col items-center justify-between">
          {footer.data?.locationsHeading ? (
            <PrismicRichText field={footer.data.locationsHeading} />
          ) : (
            <SkeletonLoader height="40px" /> // Skeleton loader for heading
          )}
          <ul className="min-h-[150px] list-none">
            {footer.data?.locations ? (
              footer.data.locations.map((item, index) => (
                <li key={index} className="pb-2 tracking-tight text-white">
                  <PrismicRichText field={item.city} components={components} />
                  <PrismicRichText
                    field={item.address}
                    components={components}
                  />
                </li>
              ))
            ) : (
              <>
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
              </>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex h-full min-h-[200px] flex-col justify-between">
          {footer.data?.contactHeading ? (
            <PrismicRichText field={footer.data.contactHeading} />
          ) : (
            <SkeletonLoader height="40px" /> // Skeleton loader for heading
          )}
          <ul className="min-h-[150px] list-none">
            {footer.data?.contact ? (
              footer.data.contact.map((item, index) => (
                <li key={index} className="pb-2 tracking-tight text-white">
                  <PrismicRichText field={item.email} components={components} />
                  <PrismicRichText
                    field={item.telephone}
                    components={components}
                  />
                </li>
              ))
            ) : (
              <>
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
              </>
            )}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex h-full min-h-[200px] flex-col justify-between">
          {footer.data?.socialsHeading ? (
            <PrismicRichText field={footer.data.socialsHeading} />
          ) : (
            <SkeletonLoader height="40px" /> // Skeleton loader for heading
          )}
          <ul className="min-h-[150px] list-none">
            {footer.data?.socials ? (
              footer.data.socials.map((item, index) => (
                <li key={index} className="tracking-tight text-white">
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </li>
              ))
            ) : (
              <>
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
                <SkeletonLoader height="20px" />
              </>
            )}
          </ul>
        </div>
      </div>
    </Bounded>
  );
};
