import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import React from 'react';
import { Fragment } from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
// import Star from '../components/Star';
import { rhythm } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  componentDidMount() {
    let isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(
      navigator.userAgent
    );
    if (!isMobile) {
      window.StarLight = null;
      window.starColor = [
        '#0d4b74',
        '#6691ab',
        '#213a55',
        '#bed0cb',
        '#7f486b',
      ];
      window.initStar = function() {
        let _width = document.documentElement.clientWidth;
        let half_height = document.documentElement.clientHeight / 2 + 50; // 半屏就好
        StarLight.init('starlight', _width, half_height);
        StarLight.star();
      };
      StarLight = (function() {
        const colors = [
          ['#b03941', '#843f43', '#c56077', '#f27c73', '#e6c4c1'], //orange pink sun
          ['#74af9d', '#6dd2c5', '#b3c3c3', '#c1cec4', '#cdeeed'], //green blue
          ['#599af5', '#375aa6', '#2c3c6c', '#54478f', '#090b18'], //purple blue night
          ['#0d4b74', '#6691ab', '#213a55', '#bed0cb', '#7f486b'], //pink blue sun
          // ['#642329', '#671b23', '#984d4a', '#6d4f40', '#251a19'], //dark pink
          // ['#402b21', '#966a57', '#934a3f', '#24201c', '#d1987e'], //dark orange
          // ['#161114', '#333433', '#424348', '#9d9d97', '#ababaa'], //dark grey
          // ['#27424d', '#344243', '#364143', '#203f49', '#021623'], //dark blue
        ];
        // const color = colors[Math.floor(Math.random() * 8)];
        // StarLight.color = ['#0d4b74', '#6691ab', '#213a55', '#bed0cb', '#7f486b']
        const setting = {
          width: screen.width,
          height: screen.height,
          canvas: null,
          content: null,
          maxStar: 30,
          newStar: 6,
          starArr: [],
          number: 30,
        };

        function init(canvas, w, h) {
          // console.log('init')
          setting.canvas = document.getElementById(canvas);
          setting.canvas.setAttribute('width', w);
          setting.canvas.setAttribute('height', h);
          setting.width = w;
          setting.height = h;
          setting.content = setting.canvas.getContext('2d');
          // setting.content.clearRect(0, 0, w, h);
        }

        function updateStar() {
          setting.content.clearRect(0, 0, setting.width, setting.height);
          setting.content.save();
          for (let i = 0; i < setting.starArr.length; i++) {
            let h = 0.35 * setting.starArr[i].scale;
            setting.starArr[i].x +=
              (Math.tan((setting.starArr[i].deg * Math.PI) / 180) * h) / 2;
            setting.starArr[i].y = setting.starArr[i].y + h;

            if (
              setting.starArr[i].x < 0 ||
              setting.starArr[i].x > setting.width ||
              setting.starArr[i].y > setting.height
            ) {
              setting.starArr.splice(i--, 1);
              continue;
            }

            setting.content.beginPath();
            for (let j = 0; j < 5; j++) {
              setting.content.lineTo(
                Math.cos(((18 + j * 72) / 180) * Math.PI) * 10 +
                  setting.starArr[i].x,
                -Math.sin(((18 + j * 72) / 180) * Math.PI) * 10 +
                  setting.starArr[i].y
              );
              setting.content.lineTo(
                Math.cos(((54 + j * 72) / 180) * Math.PI) * 5 +
                  setting.starArr[i].x,
                -Math.sin(((54 + j * 72) / 180) * Math.PI) * 5 +
                  setting.starArr[i].y
              );
            }
            setting.content.closePath();
            setting.content.globalAlpha = setting.starArr[i].alpha;
            setting.content.shadowOffsetX = 2;
            setting.content.shadowOffsetY = 2;
            setting.content.shadowBlur = 4;
            setting.content.shadowColor = 'rgba(0, 0, 0, 0.15)';
            setting.content.fillStyle = starColor[setting.starArr[i].c];
            setting.content.fill();
          }
          setting.content.restore();
          window.requestAnimationFrame(updateStar);
        }

        function createNewStar() {
          setTimeout(function() {
            if (setting.starArr.length < setting.maxStar) {
              for (let i = 0; i < setting.newStar; i++) {
                let minus = Math.random() < 0.5 ? -1 : 1;
                setting.starArr.push({
                  x: Math.random() * setting.width,
                  y: 0,
                  c: Math.floor(Math.random() * 6),
                  deg: Math.random() * 6 * minus,
                  scale: 3 + Math.random() * 3,
                  alpha: 0.5 + Math.random() * 0.1,
                });
              }
            }
            createNewStar();
          }, Math.random() * 200 + 500);
        }

        function star() {
          for (let i = 0; i < setting.number; i++) {
            let minus = Math.random() < 0.5 ? -1 : 1;
            setting.starArr.push({
              x: Math.random() * setting.width,
              y: Math.random() * setting.height,
              c: Math.floor(Math.random() * 6),
              deg: Math.random() * 6 * minus,
              scale: 3 + Math.random() * 3,
              alpha: 0.5 + Math.random() * 0.1,
            });
          }
          updateStar();
          createNewStar();
        }

        function set(num, maxStar, newStar) {
          setting.num = num;
          setting.maxStar = maxStar;
          setting.newStar = newStar;
        }
        return {
          init: init,
          star: star,
          set: set,
        };
      })();
      let _width = document.documentElement.clientWidth;
      let half_height = document.documentElement.clientHeight / 2 + 50; // 半屏就好
      let gatsbyDom = document.getElementById('___gatsby');

      let canvasDom = document.getElementById('starlight');
      if (!canvasDom) {
        canvasDom = document.createElement('canvas');
        canvasDom.id = 'starlight';
        document.body.insertBefore(canvasDom, gatsbyDom);
      }

      let MaskDom = document.getElementById('mask');
      if (!MaskDom) {
        MaskDom = document.createElement('div');
        MaskDom.id = 'mask';
        MaskDom.style.height = half_height + 'px';
        document.body.insertBefore(MaskDom, gatsbyDom);
      }

      gatsbyDom.children[0].children[0].style.background = 'transparent';
      // window.onresize = function() { //todo: 浏览器尺寸变动要适配
      //   console.log(233);
      //   initStar();
      // };
      initStar();
      // // document.body.appendChild(canvasDom)
      // StarLight.init('starlight', _width, half_height);
      // StarLight.star();
    }
  }
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
