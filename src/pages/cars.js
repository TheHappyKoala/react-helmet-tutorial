import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout
    pageMeta={{
      title: "Our Cars",
      keywords: ["toyota", "suv", "volvo"],
      description:
        "We sell toyotas, gas guzzlers and volvos. If we don't have the car you would like, let us know and we will order it for you!!!",
      customCssClass: "slick",
    }}
  >
    <h2>Our Cars</h2>
    <div>A car</div>
    <div>Another car</div>
    <div>Yet another car</div>
    <div>Cars ad infinitum</div>
  </Layout>
)
