import React from 'react';
import './Bio.css';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={`https://avatars3.githubusercontent.com/u/24623866?s=460&v=4`}
          alt={`avatar`}
          className="avatar"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by <a href="https://github.com/Kaier33">Kaier</a>.{' '}
          <br />
          Make a little little progress every day.
        </p>
      </div>
    );
  }
}

export default Bio;
