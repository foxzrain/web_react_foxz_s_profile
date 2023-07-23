import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {  
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <ParticlesBg type="color" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
            <img src="../assets/icons/menu.png" alt="menu"/>
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
            <img src="../assets/icons/menu.png" alt="menu"/>
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education & Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#skill">
                Skills
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
