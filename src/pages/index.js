import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Tile from '../components/Tile';

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        const posts = this.props.data.allMarkdownRemark.edges.map(edge => edge.node);

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        {
                            posts.map(post => {
                                const imagePath = post.frontmatter.featuredImage
                                    ? post.frontmatter.featuredImage.publicURL
                                    : undefined
                                return (
                                    <Tile title={post.frontmatter.title}
                                        path={post.frontmatter.path}
                                        featuredImagePath={imagePath}
                                        excerpt={post.excerpt} />
                                );
                            })
                        }
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }

        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 6
        ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                    title
                    featuredImage {
                        publicURL
                    }
                }
            }
        }   
    }
}
`