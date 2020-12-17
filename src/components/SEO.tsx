import Head from "next/head";
import { FC } from "react";

interface ISEOProps {
  pageTitle: string;
  description: string;
  pageImage?: string;
  metaTags?: any;
}

const SEO: FC<ISEOProps> = ({
  pageTitle,
  description,
  pageImage,
  metaTags,
  ...rest
}) => {
  return (
    <Head {...rest}>
      <title>{pageTitle}</title>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />

      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      {!!metaTags ? (
        Object.entries(metaTags).map(([key, value], index) => {
          if (String(key).includes(":")) {
            return <meta key={String(index)} property={`${key}`} content={String(value)} />;
          }
          if (String(key) !== "schema") {
            return <meta key={String(index)} name={`${key}`} content={String(value)} />;
          }

          return null;
        })
      ) : (
        <>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={pageTitle} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:image:secure_url" content={pageImage} />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
    </Head>
  );
};

export default SEO;
