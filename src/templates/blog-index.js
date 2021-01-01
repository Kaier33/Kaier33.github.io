import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import React from 'react';
import { Fragment } from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';
import Star from '../components/Star';

class BlogIndexTemplate extends React.Component {
  state = {
    star: null,
    timer: null,
    canvasDom: null,
    maskDom: null,
  };
  componentDidMount() {
    let _width = document.documentElement.clientWidth;
    let half_height = document.documentElement.clientHeight / 2 + 50; // 半屏就好
    let gatsbyDom = document.getElementById('___gatsby');

    let canvasDom = document.getElementById('starlight');
    if (!canvasDom) {
      canvasDom = document.createElement('canvas');
      canvasDom.id = 'starlight';
      document.body.insertBefore(canvasDom, gatsbyDom);
    }

    let maskDom = document.getElementById('mask');
    if (!maskDom) {
      maskDom = document.createElement('div');
      maskDom.id = 'mask';
      maskDom.style.height = half_height + 'px';
      document.body.insertBefore(maskDom, gatsbyDom);
    }
    gatsbyDom.children[0].children[0].style.background = 'transparent';

    const star = new Star();
    this.setState({ canvasDom, star, maskDom }, () => {
      star.init(canvasDom, _width, half_height);
      window.addEventListener('resize', this.handleResize.bind(this));
    });
  }
  componentWillUnmount() {
    if (this.isMobile()) {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }
  }
  isMobile() {
    return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
  }
  handleResize = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight / 2 + 50;
      this.state.star.reset();
      this.state.star.init(this.state.canvasDom, width, height);
      this.state.maskDom.style.height = `${height}px`;
      this.state.maskDom.style.width = `${width}px`;
    }, 500);
  };
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Fragment>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO />
          <aside>
            <Bio />
          </aside>
          <main>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return (
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: rhythm(1),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={node.fields.slug}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>
                      {formatPostDate(node.frontmatter.date, langKey)}
                      {` • ${formatReadingTime(node.timeToRead)}`}
                    </small>
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
              );
            })}
          </main>
        </Layout>
      </Fragment>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;
