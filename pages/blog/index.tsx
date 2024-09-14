import { PrismicLink, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "../../prismicio";
import { components } from "../../slices/index";
import { Layout } from "../../components/Layout";
import { NextSeo } from "next-seo";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { useRouter } from "next/router";

type BlogPost = prismic.Content.BlogDocument;

// Single blog post showing title, description, publication date, and thumbnail
const SingleBlogPost = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  const publicationDate = new Date(post.first_publication_date);
  return (
    <PrismicLink href={post.url} className="h-full w-full bg-slate-300">
      <article className="flex h-full flex-col p-4">
        <Heading as="h3" size="md">
          {post.data.blog_title}
        </Heading>
        <div className="flex-grow">
          <p className="line-clamp-3">{post.data.blog_description}</p>
        </div>
        <small className="pt-4 text-gray-500">
          {publicationDate.toLocaleDateString("nl-NL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
        <PrismicNextImage field={post.data.thumbnail} className="mt-4" />
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={() => router.push(post.url)}
            className="rounded border-2 border-[#183540] px-5 py-2 font-semibold text-[#183540] hover:bg-[#183540] hover:text-white"
          >
            Lees verder
          </button>
        </div>
      </article>
    </PrismicLink>
  );
};

// Blog grid showing only 3 blog items wide
const BlogGrid = ({ blogPosts }) => {
  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
      {blogPosts.map((post: BlogPost) => (
        <SingleBlogPost post={post} key={post.id} />
      ))}
    </div>
  );
};

const Index = ({ page, navigation, settings, footer, blogPosts }) => {
  const {
    metaTitle,
    metaDescription,
    socialCardTitle,
    socialCardDescription,
    socialCardImage,
  } = page.data;

  console.log(blogPosts);

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
      <Bounded as="section" yPadding="lg">
        <BlogGrid blogPosts={blogPosts} />
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const blogPosts = await client.getAllByType("blog", { lang: locale });

  const page = await client.getByUID("page", "blog", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });
  // const services = await client.getByTag("diensten", { lang: locale });

  return {
    props: {
      blogPosts,
      page,
      navigation,
      settings,
      footer,
    },
  };
}
