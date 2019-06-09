import React from 'react';
import avatar from '../assets/02.png';
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
          src={avatar}
          alt={`avatar`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://github.com/KaierChou">Kaier</a>.{' '} <br/>
          Make a little little progress every day.
        </p>
      </div>
    );
  }
}

export default Bio;
