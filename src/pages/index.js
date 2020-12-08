import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout path="index-colour">
    <SEO title="👋 About Me" pageThumb="/meta-about.jpg" />

    <div class="page-wrapper index-wrapper big h-card">
      <a class="p-name u-url u-uid hidden" href="https://finmoorhouse.com/">
        Fin Moorhouse
      </a>
      {/*<img class="u-photo hidden" src="https://www.finmoorhouse.com/fin-moorhouse-indieweb-picture.jpg" />*/}
      <h1 class="page-title">About me</h1>
      <hr />
      <p>
        I recently graduated in philosophy from Cambridge. Now I'm figuring out what to do with my life. In the meantime: I code, write, make films, and do research.
      </p>
      <p>
        I have experience with filmmaking, event coverage, motion graphics, and web design. I'm currently working on a{" "}
        <Link to="/portfolio/packhorse">documentary</Link>, I just finished interning with{" "}
        <a href="https://www.charityentrepreneurship.com/" target="_none">
          these folks
        </a>, and now I help  <a href="https://en.wikipedia.org/wiki/Liv_Boeree" target="_none">
          Liv Boeree
        </a> make videos like <a href="https://youtu.be/kM7J56OxA6w" target="_none">
          this
        </a>.
         Read my CV{" "}
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
        and related ideas like longtermism and existential risk. I write about this kind of thing on my <Link to="/writing">writing</Link>{" "}
        page and elsewhere.
      </p>
      <p>
        I{" "}
        <a href="http://www.goodreads.com/finm" target="blank">
          read
        </a>{" "}
        and play chess badly in my free time.
      </p>
    </div>
  </Layout>
)

export default IndexPage
