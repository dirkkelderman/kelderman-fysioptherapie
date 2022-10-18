import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ page, navigation, settings, footer }) => {
  return (
    <Layout navigation={navigation} settings={settings} footer={footer}>
      <Head>
        <title>
          {prismicH.asText(page.data.title)} |{" "}
          {prismicH.asText(settings.data.siteTitle)}
        </title>
        <meta name="description" content={page.data.metaDescription} />

        <meta
          property="og:title"
          content={
            prismicH.asText(page.data.socialCardTitle) |
            prismicH.asText(settings.data.siteTitle)
          }
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={page.data?.url} />
        <meta property="og:image" content={page.data?.socialCardImage?.url} />
        <meta
          property="og:description"
          content={prismicH.asText(page.data?.socialCardDescription)}
        />
        <meta property="og:site_name" content="Kelderman Fysiotherapie" />
        <meta property="fb:admins" content="Facebook numeric ID" />
      </Head>
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

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
