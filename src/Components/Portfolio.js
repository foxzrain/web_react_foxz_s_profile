import React, { Component } from "react";
import ReactZmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    
    const portfolioes = this.props.data.projects.map((projects, index) => {
      let portfolioImage = "../Assets/cover/" + projects.image;

      return (
        <div key={index} className="columns portfolio-item">
          <div className="item-wrap">
            <ReactZmage alt={projects.title} src={portfolioImage} set={projects.set}/>
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