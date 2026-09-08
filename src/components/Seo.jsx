import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

const Seo = ({ title, description, jsonLd }) => {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []).map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
