import React from "react"
import Layout from "../component/layout"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
      <Layout>
      <p>하루하루 감사하며 행복한 둥고</p>
      <h3>포스트 목록</h3>
      {data.allMarkdownRemark.edges.map(post => (
        <div>
              <a
                key={post.node.id}
                href={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
             </a>
              <p>{post.node.frontmatter.date}</p>
        </div>
      ))}
      </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

export default IndexPage
