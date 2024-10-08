import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { Analytics } from "@vercel/analytics/react";

import { repositoryName, linkResolver } from "../prismicio";
import { Heading } from "../components/Heading";

import "../styles/globals.css";
import { useEffect, useState } from "react";

import { DefaultSeo } from "next-seo";

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale} {...props}>
      {children}
    </Link>
  );
};

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Analytics />
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "nl_NL",
            url: "https://www.keldermanfysiotherapie.nl/",
            siteName: "Kelderman Fysiotherapie",
            title: "Kelderman Fysiotherapie",
            images: [
              {
                url: "https://images.prismic.io/kelderman-fysiotherapie/dd404877-d58e-4264-8c1f-22f961cf710b_logo_groot_alleen_K.png?auto=compress,format",
                width: 300,
                height: 300,
                alt: "Kelderman Fysiotherapie",
              },
            ],
          }}
        />
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
