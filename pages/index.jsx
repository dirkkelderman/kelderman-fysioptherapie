import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
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
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical="https://www.keldermanfysiotherapie.nl/"
        openGraph={{
          title: prismicH.asText(socialCardTitle),
          description: prismicH.asText(socialCardDescription),
          images: [
            {
              url: socialCardImage.url,
              width: 800,
              height: 600,
              alt: socialCardImage.alt,
              type: "image/jpeg",
            },
          ],
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
