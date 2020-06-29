import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import AgeData from "../components/graph/AgeData"
import SexData from "../components/graph/sexData"
import HometownData from "../components/graph/HometownData"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Bio />

      <h2>データでみる東京都知事選2020</h2>

      {/* 年齢 */}
      <AgeData/>

      {/* 性別 */}
      <SexData/>

      {/* 出身地 */}
      <HometownData/>

      {/* 学歴 */}
      <h3>学歴</h3>
      <div style={
        { width: '100%'
       }
      }>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgnIbN_bmHnbLm3xml5i-N9iIqJRsnEZxZfpreHrHv2ZZpkH42gQl1_yqRxlogeuUlQia28in59OC/pubchart?oid=1041957208&amp;format=interactive"
                width="100%" 
                height="380px"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                scrolling="no" 
                style={
                  {border: '1px solid #CCC', marginBottom: '5px', width: '100%'}
                } 
                allowFullScreen
        />
      </div>

      {/* 職歴 */}
      <h3>職歴</h3>
      <div style={
        { width: '100%'
       }
      }>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgnIbN_bmHnbLm3xml5i-N9iIqJRsnEZxZfpreHrHv2ZZpkH42gQl1_yqRxlogeuUlQia28in59OC/pubchart?oid=1437086025&amp;format=interactive" 
                width="100%" 
                height="380px"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                scrolling="no" 
                style={
                  {border: '1px solid #CCC', marginBottom: '5px', width: '100%'}
                } 
                allowFullScreen
        />
      </div>

      {/* 2016年東京都知事選得票率 */}
      <h3>2016年東京都知事選得票率</h3>
      <div style={
        { width: '100%'
       }
      }>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgnIbN_bmHnbLm3xml5i-N9iIqJRsnEZxZfpreHrHv2ZZpkH42gQl1_yqRxlogeuUlQia28in59OC/pubchart?oid=172629400&amp;format=interactive" 
                width="100%" 
                height="380px"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                scrolling="no" 
                style={
                  {border: '1px solid #CCC', marginBottom: '5px', width: '100%'}
                } 
                allowFullScreen
        />
      </div>


      <h2>候補者データの比較</h2>
      <div style={
        { width: '100%'
       }
      }>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgnIbN_bmHnbLm3xml5i-N9iIqJRsnEZxZfpreHrHv2ZZpkH42gQl1_yqRxlogeuUlQia28in59OC/pubhtml?gid=851197282&amp;single=true&amp;widget=true&amp;headers=false" 
                width="100%" 
                height="380px"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                scrolling="no" 
                style={
                  {border: '1px solid #CCC', marginBottom: '5px', width: '100%'}
                } 
                allowFullScreen
        />
      </div>

      <h2>演説動画一覧</h2>
      <div style={
        { width: '100%'
       }
      }>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ_o_-LU6bTIAWZipEiPtorM7v8eB2piJTM8Mrto-9NdX2VZDcaKP1gyXGeQ5sHRaZ_gJ_X5gM1tsa7/embed?start=false&loop=false&delayms=60000" 
                width="100%" 
                height="320px"
                frameborder="0" 
                marginwidth="0" 
                marginheight="0" 
                scrolling="no" 
                style={
                  {border: '1px solid #CCC', marginBottom: '5px', width: '100%'}
                } 
                allowFullScreen
        />
      </div>

      <h2>候補者一覧</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
