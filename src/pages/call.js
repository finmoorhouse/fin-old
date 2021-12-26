import React from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"

class CallPage extends React.Component {
  componentDidMount() {
    window.location.replace("https://calendly.com/finmoorhouse/call")
  }
  render() {
    return (
      <>
        <Layout>
          <Seo title="📞 Call" pageThumb="/meta-image.jpg" />
          <h1 className="page-title">Call</h1>
          <hr />
          <p>
            You should be redirected to a place where you can book a call with
            me. If that doesn't work,{" "}
            <a href="https://calendly.com/finmoorhouse/call">click this link</a>
            .
          </p>
        </Layout>
      </>
    )
  }
}

export default CallPage