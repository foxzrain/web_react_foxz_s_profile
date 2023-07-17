import React, { Component } from "react";
import Slide from "react-reveal";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Radial separators
import RadialSeparators from "./RadialSeparators";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    
    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const dotClass = "dot " + skills.name.toLowerCase();

      const rows = [];
      for (let i = 0; i < 5; i++) {
          // note: we are adding a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          if(i < skills.level) {
            rows.push(
                <div style={{ backgroundColor, borderColor: backgroundColor }} className={dotClass}>
                </div>
            );
          } else {
            rows.push(
              <div style={{ backgroundColor: "transparent", borderColor: backgroundColor }} className={dotClass}>
              </div>
          );
          }
      }

      return (
        <li key={skills.name}>            
          <em>{skills.name}</em>
          <div className="row-skill">
            {rows}
          </div>
        </li>
      );
    });

    const languages = this.props.data.languages.map(function (language) {
      if(language.name === "English") {
        return (
          <div className="column">
            <div className="lang-width">
              <h6 style={{textAlign: "center"}}>{language.name} (TOEIC)</h6>
              <CircularProgressbarWithChildren
                value={language.level}
                text={language.level}
                strokeWidth={8}
                maxValue={990}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#BC0B4C",
                  textColor: "#BC0B4C"
                })}
              >
              </CircularProgressbarWithChildren>
            </div>
          </div>
        );
      } else {
        return (
          <div className="column">
            <div className="lang-width">
              <h6 style={{textAlign: "center"}}>{language.name} (HSK)</h6>
              <CircularProgressbarWithChildren
                value={language.level}
                text={language.level}
                strokeWidth={8}
                maxValue={6}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  pathColor: "#700BBC",
                  textColor: "#700BBC"
                })}
              >
                <RadialSeparators
                  count={6}
                  style={{
                    background: "#fff",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`
                  }}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>
        );
      }
    });

    return (
      <section id="skill">
        <Slide left duration={1300}>
          <div className="row languaue">
            <div className="three columns header-col">
              <h1>
                <span>Languages</span>
              </h1>
            </div>

            <div className="row">
                {languages}
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="info">{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
