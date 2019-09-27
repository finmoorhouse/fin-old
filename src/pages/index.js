import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper">
      <h1>About me</h1>
      <hr />
      <p>
        I am a filmmaker and designer based in Bath and Cambridge. I'm also
        currently studying philosophy at the University of Cambridge. In my free
        time, I like to row and
        <a href="http://www.goodreads.com/finm" target="blank">
          read.
        </a>
      </p>
      <p>
        I also co-host the podcast 'Is ANyone Still Listening?', which features
        in-depth conversations with academics about their work. You can fid it
        on Spotify, iTunes, and Google Podcasts.
      </p>
    </div>
  </Layout>
)

export default IndexPage
