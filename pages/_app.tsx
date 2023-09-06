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
    <Link href={href} locale={locale}>
      <a {...props}>{children}</a>
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
                url: "data:image/jpeg;base64,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",
                width: 1200,
                height: 630,
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
