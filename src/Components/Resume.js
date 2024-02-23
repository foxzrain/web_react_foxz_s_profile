import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map((education, index) => {
      return (
        <div key={Math.random()}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
    
          <div>{education.description.map((des, index) => {
              return <li key={Math.random()}>{des}</li>
            })
          }</div>
        </div>
      );
    });

    const work = this.props.data.work.map((work, index) => {
      return (
        <div key={Math.random()}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> 
            <em className="date">{work.years}</em>
          </p>
    
          <div>{work.description.map((des, index) => {
              return <li key={Math.random()}>{des}</li>
            })
          }</div>
        </div>
      );
    });
    
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
