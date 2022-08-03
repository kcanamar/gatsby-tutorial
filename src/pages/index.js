import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>Look its a layout</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/icon.png"
      />
    </Layout>
  )
}