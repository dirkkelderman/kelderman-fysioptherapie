import * as prismic from "@prismicio/client";
// import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  if (doc.url === "/home") {
    return "/";
  }
};

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes: [
      { type: "page", path: "/:uid" },
      { type: "settings", path: "/" },
      { type: "navigation", path: "/" },
      { type: "footer", path: "/" },
    ],
  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
