import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "../assets/images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const email = this.props.data.email;
    const work = this.props.data.work;
    const resumeDownload = this.props.data.resumedownload;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <i className="fa fa-user"></i><span>{name}</span>
                    <br />
                    <i className="fa fa-envelope"></i><span>{email}</span>
                    <br />
                    <i className="fa fa-briefcase"></i><span>{work}</span>
                    <br />
                    <i className="fa fa-home"></i><span>
                      {city} {state}, {zip}
                    </span>
                  </p>
                </div>

                <div className="columns">
                  <ul className="columns social-links">{networks}</ul>
                </div>
                
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
