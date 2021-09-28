import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import * as styles from '../components/hero.module.css'
import { format } from 'date-fns'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.aamu.BlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.hero}>
            <GatsbyImage className={styles.heroImage} alt={post.title} image={post.heroImage.image.childImageSharp.gatsbyImageData} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {format(new Date(post.publishDate).valueOf(), 'MMMM Do, yyyy')}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    aamu {
      BlogPost(slug: $slug) {
        title
        publishDate
        heroImage {
          url
          image {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        body
        slug
      }
    }
  }
`
