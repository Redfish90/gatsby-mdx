import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import { graphql } from "gatsby"

const CategoryTemplate = ({ data, pageContext }) => {
  const { category } = pageContext
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query getPostsPerCategory($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          category
          slug
          title
          readTime
          date(formatString: "MMMM Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export default CategoryTemplate
