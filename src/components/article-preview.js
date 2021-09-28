import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from 'date-fns'
import * as styles from './article-preview.module.css'

export default ({ article }) => (
  <div>
    <GatsbyImage alt="" image={article.heroImage.image.childImageSharp.gatsbyImageData} />
    <h3>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{format(new Date(article.publishDate).valueOf(), 'MMMM Do, yyyy')}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description,
      }}
    />
    {article.tags && article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))}
  </div>
)
