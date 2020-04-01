import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"


const IndexPage = () => (
  <Layout path="index-colour">
   
    <SEO title="🧍 About Me" />
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
        I co-host a podcast called <i>Hear This Idea</i> which showcases new thinking from top academics at the University of Cambridge and beyond. You can find it at <a href='https://www.hearthisidea.com' target='_none'>hearthisidea.com</a>.
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
