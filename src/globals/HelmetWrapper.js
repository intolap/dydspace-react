import React from 'react'
import { Helmet } from 'react-helmet';

export default function HelmetWrapper(props) {
  const data = props.data;

  return (
    <Helmet>
        <title>{data.yoast_head_json.title}</title>
        <meta name="description" content={data.yoast_head_json.description} />
        <link rel="canonical" href={data.yoast_head_json.canonical} />
        <meta property="og:locale" content={data.yoast_head_json.og_locale} />
        <meta property="og:type" content={data.yoast_head_json.og_type} />
        <meta property="og:title" content={data.yoast_head_json.og_title} />
        <meta property="og:url" content={data.yoast_head_json.og_url} />
        <meta property="og:site_name" content={data.yoast_head_json.og_site_name} />
        <meta property="article:publisher" content={data.yoast_head_json.article_publisher} />
        <meta property="article:modified_time" content={data.yoast_head_json.article_modified_time} />
        <meta name="twitter:card" content={data.yoast_head_json.twitter_card} />
        {/* <script type="application/ld+json" class="yoast-schema-graph">{data.yoast_head_json.schema}</script> */}
        <meta name="google-site-verification" content="EyT6Y0SHakrIhV-_AysO9YyyCkyT3U_W14Y26VBgfdI" />
    </Helmet>
  )
}
