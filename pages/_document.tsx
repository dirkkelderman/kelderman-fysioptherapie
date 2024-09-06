import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        /> */}
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
