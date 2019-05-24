import React from 'react';
import main from '../img/main.jpg';
import './About.css';

export default class About extends React.Component {

  render() {
    return (
      <div id="about">
        <h1 id="about-title">About<hr style={{margin: '0', borderColor: 'white', backgroundColor: 'white'}}/></h1>
        <img src={main} id="about-img" alt="Shrey Dabhi" />
        <h2 id="about-text" style={{ margin: '15px 0' }}>I am Shrey Dabhi.</h2>
        <p id="about-text" style={{ fontSize: 'large' }}>A passionate open-source developer, with a knack for building robust Machine Learning models, intuitive UIs and performant backends. I also deploy what I build ;)</p>
        <br/>
        <p id="about-text" style={{ fontSize: 'large' }}>I enjoy learning new skills and improving my old ones. </p>
        <br/>
        <a id="about-text" style={{ marginTop: '2vh' }} href="https://medium.com/@sdabhi23" target="_blank" rel="noopener noreferrer"><h2>Medium Profile</h2></a>
        <br/>
      </div>
    );
  }
}