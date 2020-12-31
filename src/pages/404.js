import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Not Found</h1>
          <p>I haven’t written this post yet. Will you help me write it?</p>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6IJB0aD8gSA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          /> */}
          <iframe
            width="560"
            height="315"
            src="//player.bilibili.com/player.html?aid=53437058&cid=93489702&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>Too doo doo doo doo doo doo doo</p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
