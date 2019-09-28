import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper index-wrapper">
      <h1 class="page-title">About me</h1>
      <hr />
      <p>
        I am a filmmaker and designer based in Bath and Cambridge. I'm also
        currently studying philosophy at the University of Cambridge. In my free
        time, I like to row and{" "}
        <a href="http://www.goodreads.com/finm" target="blank">
          read.
        </a>
      </p>
      <p>
        I have worked on short films, sports event coverage, motion graphics,
        branding, and web design. I'm currently working on a documentary. In a
        nutshell, I<b> tell stories</b>, visually.
      </p>
      <p>
        I co-host a podcast called 'Vocal Thinkers', which features unusually
        in-depth conversations with academics about their recent work. I'll post
        a link when the website goes live.
      </p>
      <p>
        Lastly, I'm interested in{" "}
        <a href="https://www.effectivealtruism.org/" target="blank">
          effective altruism
        </a>{" "}
        and related ideas: long-termism, and existential risk. I'm hoping to
        write about this kind of thing a bit more, on my 'writing' page and
        elsewhere.
      </p>
    </div>
  </Layout>
)

export default IndexPage
