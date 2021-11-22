import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const {
    allMdx: { distinct: categories },
  } = useStaticQuery(query)
  console.log(categories)
  return (
    <ul className="categories">
      {categories.map((category, id) => (
        <li key={id}>
          <Link to={`/${category}`} className="category">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Categories
