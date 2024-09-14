import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { NextSeo } from "next-seo";
import { Layout } from "../../components/Layout";
import { components } from "../../slices";
import { createClient } from "../../prismicio";

const BlogPage = ({ blogPage, navigation, settings, footer }) => {
  const {
    metaTitle,
    metaDescription,
    socialCardTitle,
    socialCardDescription,
    socialCardImage,
  } = blogPage.data;

  return (
    <Layout navigation={navigation} settings={settings} footer={footer}>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical={`https://www.keldermanfysiotherapie.nl${blogPage.url}`}
        openGraph={{
          title: prismic.asText(socialCardTitle),
          description: prismic.asText(socialCardDescription),
          images: [
            {
              url: socialCardImage?.url,
              width: 800,
              height: 600,
              alt: socialCardImage?.alt,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <SliceZone slices={blogPage.data.slices} components={components} />
    </Layout>
  );
};

export default BlogPage;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  console.log("PARAMS", params);

  const blogPage = await client.getByUID("blog", params.uid, { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

  return {
    props: {
      blogPage,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const blogPages = await client.getAllByType("blog", { lang: "*" });

  return {
    paths: blogPages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
