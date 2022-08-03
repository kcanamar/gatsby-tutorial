import * as React from 'react'
import Layout from '../components/layout'
// Step 1: Import the graphql tag
import { graphql } from 'gatsby'

// Step 2: Export a page query
export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default function BlogPage({ data }){
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      { /* Step 3: Use the data in your component*/ }
      <ul>
        {
            data.allFile.edges.map((edge, index) => (
                <li key={index}>
                    {edge.node.name}
                </li>
            ))
        }
      </ul>
    </Layout>
  )
}