import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import '../css/layout.css';
import '../css/media-queries.css';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    
    const portfolioes = this.props.data.projects.map(function (projects) {
      let portfolioImage = "../Assets/cover/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={portfolioImage} set={projects.set}/>
            <div className="item-title">{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>My portfolio.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {portfolioes}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;