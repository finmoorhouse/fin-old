import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="👋 About Me" pageThumb="/meta-about.jpg" />

    <div className="page-wrapper index-wrapper big h-card">
      <a className="p-name u-url u-uid hidden" href="https://finmoorhouse.com/">
        Fin Moorhouse
      </a>
      {/*<img className="u-photo hidden" src="https://www.finmoorhouse.com/fin-moorhouse-indieweb-picture.jpg" />*/}
      <h1 className="page-title">About me</h1>
      <hr />
      <p>
        Right now I'm a Research Scholar and assistant to{" "}
        <a href="https://en.wikipedia.org/wiki/Toby_Ord" target="_none">
          Toby Ord
        </a>{" "}
        at Oxford University's{" "}
        <a href="https://www.fhi.ox.ac.uk/" target="_none">
          Future of Humanity Institute
        </a>
        .
        <p>
          I'm interested in{" "}
          <a href="https://www.effectivealtruism.org/" target="blank">
            effective altruism
          </a>
          ,{" "}
          <a href="https://www.longtermism.com" target="blank">
            longtermism
          </a>
          , and{" "}
          <a href="https://www.theprecipice.com" target="blank">
            existential risk
          </a>
          . I write about this kind of thing on my{" "}
          <Link to="/writing">writing</Link> page. <Link href='/writing/ea-projects'>Here are some EA project ideas</Link> I'd like to help make happen.
        </p>
        <p>
          I co-host a podcast called{" "}
          <a href="https://www.hearthisidea.com" target="_none">
            Hear This Idea
          </a>
          , which showcases new thinking in philosophy, the social sciences, and{" "}
          <a href="https://www.effectivealtruism.org/" target="blank">
            effective altruism
          </a>
          . I'm also a mentor and panelist for the{" "}
          <a href="https://www.effectiveideas.org/" target="blank">
            Effective Ideas
          </a>{" "}
          blog prize, and I've been spending a bit of time recently thinking
          about{" "}
          <a
            href="https://80000hours.org/problem-profiles/space-governance/"
            target="_blank"
          >
            space governance
          </a>{" "}
          as an EA cause area.
        </p>
        <p>
          Before this, I interned with{" "}
          <a href="https://www.charityentrepreneurship.com/" target="_none">
            Charity Entrepreneurship
          </a>
          , and helped{" "}
          <a href="https://en.wikipedia.org/wiki/Liv_Boeree" target="_none">
            Liv Boeree
          </a>{" "}
          make{" "}
          <a href="https://youtu.be/kM7J56OxA6w" target="_none">
            videos
          </a>
          . Before <i>that</i>, I did philosophy at Cambridge.
        </p>
      </p>
      <p>
        In my free time I{" "}
        <a href="http://www.goodreads.com/finm" target="blank">
          read
        </a>
        , listen to{" "}
        <a href="https://rateyourmusic.com/collection/finm/r0.5-5.0,ss.rd" target="blank">
          music
        </a>
        , and play chess{" "}
        <a href="https://lichess.org/@/finjm" target="blank">
          badly
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default IndexPage