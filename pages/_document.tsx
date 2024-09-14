import { Html, Head, Main, NextScript } from "next/document";

const imageUrl =
  "https://www.keldermanfysiotherapie.nl/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fkelderman-fysiotherapie%2Fc4f6f369-e292-454e-86b6-7ee0c9a153dc_Portretfoto%2B1.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        /> */}

        <link rel="preload" href={imageUrl} as="image" />
        {/* Preconnect links */}
        <link rel="preconnect" href="https://prismic.io" />
        <link rel="preconnect" href="https://static.cdn.prismic.io" />
        <link rel="preconnect" href="https://vercel.live" />

        {/* Optionally, add DNS prefetch to speed up connections even further */}
        <link rel="dns-prefetch" href="https://prismic.io" />
        <link rel="dns-prefetch" href="https://static.cdn.prismic.io" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
