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
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical="https://www.keldermanfysiotherapie.nl/"
        openGraph={{
          title: prismic.asText(socialCardTitle),
          description: prismic.asText(socialCardDescription),
          images: [
            {
              url: "https://images.prismic.io/kelderman-fysiotherapie/dd404877-d58e-4264-8c1f-22f961cf710b_logo_groot_alleen_K.png?auto=compress,format",
              width: 800,
              height: 600,
              alt: socialCardImage.alt,
              type: "image/png",
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
