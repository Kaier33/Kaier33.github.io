import React from 'react';
import 'gitalk/dist/gitalk.css';
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;

class GitalkComponent extends React.Component {
  componentDidMount() {
    const GitTalkInstance = new Gitalk({
      repo: 'kaier33.github.io',
      admin: ['Kaier33'],
      owner: 'Kaier33',
      clientID: 'bd77035ea7c83480fe99',
      clientSecret: 'a81e39cc9e9f14288123a162a38828a78f1a78cd',
      pagerDirection: 'first',
      distractionFreeMode: true,
      id: location.pathname,
    });
    GitTalkInstance.render('gitalk-container');
  }

  render() {
    return (
      <div>
        <div id="gitalk-container" />
      </div>
    );
  }
}
export default GitalkComponent;
