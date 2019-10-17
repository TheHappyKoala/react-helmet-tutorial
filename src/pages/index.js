import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout
    pageMeta={{
      title: "Home",
      keywords: ["cars", "cheap", "deal"],
      description:
        "Cars4All has a car for everybody! Our prices are the lowest, and the quality the bestest; we are all about having the cake and eating it, too!",
    }}
  >
    <div>I live in a layout component, and life is pretty good here!</div>
  </Layout>
)
