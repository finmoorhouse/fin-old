import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper">
      <h1>Fin Moorhouse</h1>
      <p>
        I am a filmmaker and designer based in Bath and Cambridge. I'm also
        currently studying philosophy at the University of Cambridge. In my free
        time, I like to row and
        <a href="http://www.goodreads.com/finm" target="blank">
          readjygyjgjyg
        </a>
      </p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
