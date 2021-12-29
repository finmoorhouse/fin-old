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
        I'm a research scholar and assistant to <a href="https://en.wikipedia.org/wiki/Toby_Ord" target="_none">Toby Ord</a> at Oxford University's <a href="https://www.fhi.ox.ac.uk/" target="_none">Future of Humanity Institute</a>. Before that, I did philosophy at the University of Cambridge. I sometimes <a href="https://github.com/finmoorhouse" target="_none">code</a>, <Link to="/writing">write</Link> things, and make films.
      </p>
      <p>
        I co-host a podcast called <a href="https://www.hearthisidea.com" target="_none">
          Hear This Idea
        </a>, which showcases new
        thinking in philosophy, the social sciences, and effective altruism.
      </p>
      <p>
        Also: I'm currently working on a{" "}
        <Link to="/portfolio/packhorse">documentary</Link>, I recently interned with{" "}
        <a href="https://www.charityentrepreneurship.com/" target="_none">
          these folks
        </a>, and I help  <a href="https://en.wikipedia.org/wiki/Liv_Boeree" target="_none">
          Liv Boeree
        </a> make <a href="https://youtu.be/kM7J56OxA6w" target="_none">videos like this
        </a>.{" "}
        <a
          href="https://www.finmoorhouse.com/Fin-Moorhouse-CV.pdf"
          target="_none"
        >
         Read my CV here
        </a>
        , and read <Link to="/skills">more about what I can do here</Link>.
      </p>
      <p>
        Lastly, I'm interested in{" "}
        <a href="https://www.effectivealtruism.org/" target="blank">
          effective altruism
        </a>
        , longtermism, and existential risk. I write about this kind of thing on my <Link to="/writing">writing</Link>{" "}
        page.
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
