import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <ParticlesBg type="color" bg={true} />

        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
