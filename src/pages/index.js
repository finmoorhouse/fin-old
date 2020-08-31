import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout path="index-colour">
    <SEO title="👋 About Me" pageThumb="/meta-about.jpg" />





    <div class="page-wrapper index-wrapper big h-card">
    <a class="p-name u-url hidden" href="https://finmoorhouse.com/">
        Fin Moorhouse
      </a>
      <h1 class="page-title">About me</h1>
      <hr />
      <p>
        I'm a <span class='p-job-title'>student</span> based between Bath and Cambridge. I code, make films, and
        design things.
      </p>
      <p>
        I have experience with short films, event coverage, motion graphics,
        branding, and web design. I'm currently working on a{" "}
        <Link to="/portfolio/packhorse">documentary</Link> and interning with{" "}
        <a href="https://www.charityentrepreneurship.com/" target="_none">
          these folks
        </a>
        . Read my CV{" "}
        <a
          href="https://www.finmoorhouse.com/Fin-Moorhouse-CV.pdf"
          target="_none"
        >
          here
        </a>
        .
      </p>
      <p>
        I co-host a podcast called <i>Hear This Idea</i> which showcases new
        thinking from academics and innovators in philosophy and the social
        sciences. You can find it at{" "}
        <a href="https://www.hearthisidea.com" target="_none">
          hearthisidea.com
        </a>
        .
      </p>
      <p>
        Lastly, I'm interested in{" "}
        <a href="https://www.effectivealtruism.org/" target="blank">
          effective altruism
        </a>{" "}
        and related ideas like longtermism and existential risk. I'm hoping to
        write about this kind of thing on my <Link to="/writing">writing</Link>{" "}
        page and elsewhere.
      </p>
      <p>
        I{" "}
        <a href="http://www.goodreads.com/finm" target="blank">
          read
        </a>{" "}
        in my free time.
      </p>
    </div>
  </Layout>
)

export default IndexPage
