import React, { Component } from "react";
import Fade from "react-reveal";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    
    const portfolioes = this.props.data.projects.map((projects, index) => {
      return (
        <div key={index} className="item-wrap">
          <h3>{projects.title}</h3>
          <ImageGallery items={projects.images} thumbnail={projects.title} />
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