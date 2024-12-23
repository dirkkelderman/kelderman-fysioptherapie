import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../prismicio";
import { components } from "../slices/index";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";

const Index = ({ page, navigation, settings, footer }) => {
  const {
    metaTitle,
    metaDescription,
    socialCardTitle,
    socialCardDescription,
    socialCardImage,
  } = page.data;

  return (
    <Layout navigation={navigation} settings={settings} footer={footer}>
      <Head>
        <meta name="generator" content="Kelderman Fysiotherapie" />
        <meta name="application-name" content="Kelderman Fysiotherapie" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta
          name="keywords"
          content="fysiotherapie, kelderman, therapie, behandeling, revalidatie, fysio, zwangerschapsfitness, postpartum fitness, mom workout, fysiotherapie weesp, sportrevalidatie, zwanger fitness, dry needling"
        />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Weesp" />
        <link
          rel="alternate"
          hrefLang="nl-NL"
          href="https://www.keldermanfysiotherapie.nl/"
        />
      </Head>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical="https://www.keldermanfysiotherapie.nl/"
        openGraph={{
          type: "website",
          locale: "nl_NL",
          url: "https://www.keldermanfysiotherapie.nl/",
          siteName: "Kelderman Fysiotherapie",
          title: prismic.asText(socialCardTitle),
          description: prismic.asText(socialCardDescription),
          images: [
            {
              url:
                socialCardImage.url ||
                "https://images.prismic.io/kelderman-fysiotherapie/dd404877-d58e-4264-8c1f-22f961cf710b_logo_groot_alleen_K.png?auto=compress,format",
              width: 1200,
              height: 630,
              alt: socialCardImage.alt,
              type: "image/png",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "business:contact_data:street_address",
            content: "Bloemendalerweg 50",
          },
          {
            property: "business:contact_data:locality",
            content: "Weesp",
          },
          {
            property: "business:contact_data:country",
            content: "Netherlands",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PhysicalTherapist",
            name: "Kelderman Fysiotherapie",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bloemendalerweg 50",
              addressLocality: "Weesp",
              addressCountry: "NL",
            },
            priceRange: "€€",
            areaServed: ["Weesp", "Almere", "Amstelveen"],
            serviceType: [
              "Fysiotherapie",
              "Sportrevalidatie",
              "Zwangerschapsfitness",
              "Postpartum fitness",
              "Dry needling",
            ],
          }),
        }}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });
  // const services = await client.getByTag("diensten", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}
