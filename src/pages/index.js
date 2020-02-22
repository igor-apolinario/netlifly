import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Eae galera, partiu churras?</h1>
    <p>Com bebidas por conta da <strong>@fernanda</strong></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Contact />
  </Layout>
)

export default IndexPage
