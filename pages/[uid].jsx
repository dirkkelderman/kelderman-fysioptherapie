import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";

const Page = ({ page, navigation, settings, footer }) => {
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
        canonical={`https://www.keldermanfysiotherapie.nl${page.url}`}
        openGraph={{
          title: prismic.asText(socialCardTitle),
          description: prismic.asText(socialCardDescription),
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

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  // Filter out page with slug /blog
  const filteredPages = pages.filter((page) => page.uid !== "blog");

  return {
    paths: filteredPages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
