import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="page-wrapper index-wrapper big">
      <h1 class="page-title">About me</h1>
      <hr />
      <p>
        I'm a student based between Bath and Cambridge. I make films and design
        things.
      </p>
      <p>
        I have experience with short films, event coverage, motion graphics,
        branding, and web design. I'm currently working on a{" "}
        <Link to="/portfolio/packhorse">documentary</Link> about a village pub.
      </p>
      <p>
        I co-host a podcast called 'Vocal Thinkers', which features unusually
        in-depth conversations with academics about their recent work. It's not
        live yet, but I'll update this when it is.
      </p>
      <p>
        Lastly, I'm interested in{" "}
        <a href="https://www.effectivealtruism.org/" target="blank">
          effective altruism
        </a>{" "}
        and related ideas like long-termism and existential risk. I'm hoping to
        write about this kind of thing on my 'writing' page and elsewhere.
      </p>
      <p>
        In my free time, I like to row and{" "}
        <a href="http://www.goodreads.com/finm" target="blank">
          read.
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
