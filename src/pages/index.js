import React from "react"
import Layout from "../component/layout"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
      <Layout>
      <h1>hello world</h1>
      <p>What do I like to do?</p>
      <h2>Index</h2>
      {data.allMarkdownRemark.edges.map(post => (
        <a
          key={post.node.id}
          href={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </a>
      ))}
      </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
