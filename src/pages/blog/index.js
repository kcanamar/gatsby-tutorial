import * as React from 'react'
import Layout from '../../components/layout'
// Step 1: Import the graphql tag
import { graphql, Link } from 'gatsby'

// Step 2: Export a page query
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
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
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))
        }
      </ul>
    </Layout>
  )
}