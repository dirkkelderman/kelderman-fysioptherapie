import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "./Bounded";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "./Heading";
import { Content } from "@prismicio/client";

type FooterProps = {
  footer: Content.FooterDocument;
  settings: Content.SettingsDocument;
};

const SkeletonLoader = ({ height, width }) => (
  <div
    className="animate-pulse bg-gray-300"
    style={{ height: height || "20px", width: width || "100%" }}
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

export const NewFooter = ({ footer, settings }: FooterProps) => {
  const image = settings.data.logo;

  //Get Current Year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Bounded
        as="footer"
        aria-labelledby="footer-heading"
        className="bg-[#183540] text-white"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 text-center sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-2 xl:gap-8">
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="min-h-[30px] text-sm font-semibold leading-6 text-white">
                    {footer.data?.sitemapHeading ? (
                      <PrismicRichText field={footer.data.sitemapHeading} />
                    ) : (
                      <SkeletonLoader height="30px" width="80%" /> // Skeleton loader for heading
                    )}
                  </h3>
                  <ul role="list" className="mt-6 min-h-[150px] space-y-4">
                    {footer.data?.sitemap ? (
                      footer.data.sitemap.map((item, index) => (
                        <li
                          key={index}
                          className=" text-sm leading-6 tracking-tight text-white hover:text-gray-300"
                        >
                          <PrismicNextLink field={item.link}>
                            <PrismicText field={item.label} />
                          </PrismicNextLink>
                        </li>
                      ))
                    ) : (
                      <>
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                      </>
                    )}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className=" min-h-[30px] text-sm font-semibold leading-6 text-white">
                    {footer.data?.locationsHeading ? (
                      <PrismicRichText field={footer.data.locationsHeading} />
                    ) : (
                      <SkeletonLoader height="30px" width="80%" /> // Skeleton loader for heading
                    )}
                  </h3>
                  <ul role="list" className="mt-6 min-h-[150px] space-y-4">
                    {footer.data?.locations ? (
                      footer.data.locations.map((item, index) => (
                        <li
                          key={index}
                          className="pb-2 text-sm tracking-tight text-white hover:text-gray-300"
                        >
                          <PrismicRichText
                            field={item.city}
                            components={components}
                          />
                          <PrismicRichText
                            field={item.address}
                            components={components}
                          />
                        </li>
                      ))
                    ) : (
                      <>
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className=" min-h-[30px] text-sm font-semibold leading-6 text-white">
                    {footer.data?.contactHeading ? (
                      <PrismicRichText field={footer.data.contactHeading} />
                    ) : (
                      <SkeletonLoader height="30px" width="80%" /> // Skeleton loader for heading
                    )}
                  </h3>
                  <ul role="list" className="mt-6 min-h-[150px] space-y-4">
                    {footer.data?.contact ? (
                      footer.data.contact.map((item, index) => (
                        <li
                          key={index}
                          className=" break-words pb-2 text-sm tracking-tight text-white hover:text-gray-300"
                        >
                          <PrismicRichText
                            field={item.email}
                            components={components}
                          />
                          <PrismicRichText
                            field={item.telephone}
                            components={components}
                          />
                        </li>
                      ))
                    ) : (
                      <>
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                      </>
                    )}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="min-h-[30px] text-sm font-semibold leading-6 text-white">
                    {footer.data?.socialsHeading ? (
                      <PrismicRichText field={footer.data.socialsHeading} />
                    ) : (
                      <SkeletonLoader height="30px" width="80%" /> // Skeleton loader for heading
                    )}
                  </h3>
                  <ul role="list" className="mt-6 min-h-[150px] space-y-4">
                    {footer.data?.socials ? (
                      footer.data.socials.map((item, index) => (
                        <li
                          key={index}
                          className=" break-normal pb-2 text-sm tracking-tight text-white hover:text-gray-300"
                        >
                          <PrismicNextLink field={item.link}>
                            <PrismicText field={item.label} />
                          </PrismicNextLink>
                        </li>
                      ))
                    ) : (
                      <>
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                        <SkeletonLoader height="20px" width="100%" />
                      </>
                    )}
                    {footer.data?.socials.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-center ">
            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0 ">
              &copy; {year} Kelderman Fysiotherapie. All rights reserved.
            </p>
          </div>
        </div>
      </Bounded>
    </>
  );
};
