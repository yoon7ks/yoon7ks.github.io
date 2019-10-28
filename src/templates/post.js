import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../component/layout"

export default function Template({data}) {
  const {markdownRemark: post} = data;
  //const post = data.markdownRemark;
  return (
    <Layout>
      <h3>{post.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }  
`