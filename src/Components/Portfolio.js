import { Component } from "react";
import React from "react";
import Gall from "react-grid-gallery";
import '../Components/Gallery/Gallery.css';
import * as img_android from '../Components/Gallery/Android';
import * as img_angular5 from '../Components/Gallery/Angular5';
import * as img_csh from '../Components/Gallery/Csh';
import * as img_flutter from '../Components/Gallery/Flutter';
import * as img_inno from '../Components/Gallery/Innovation';
import * as img_js from '../Components/Gallery/Js';
import * as img_lang from '../Components/Gallery/Language';
import * as img_php from '../Components/Gallery/Php';
import * as img_reactjs from '../Components/Gallery/React';

class Portfolio extends Component {
    render() {
      if (!this.props.data) return null;
  
      return (
        <section id="portfolio">
          <div className='row-card'>
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_lang.LANGUAGE}/>
              </div>
              <p className='p-color'>Language Skill</p>
            </div>
  
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_flutter.FLUTTER}/>
              </div>
              <p className='p-color'>Flutter</p>
            </div>
  
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_android.ANDROID}/>
              </div>
              <p className='p-color'>Android</p>
            </div>
          </div>  
  
          <div className='row-card'>
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_js.JS}/>
              </div>
              <p className='p-color'>JavaScript</p>
            </div>
  
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_php.PHP}/>
              </div>
              <p className='p-color'>PHP</p>
            </div>
  
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_reactjs.REACT}/>
              </div>
              <p className='p-color'>React</p>
            </div>
          </div> 
  
          <div className='row-card'>
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_angular5.ANGULAR5}/>
              </div>
              <p className='p-color'>Angular 5</p>
            </div>
            
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_csh.CSH}/>
              </div>
              <p className='p-color'>C# GUI</p>
            </div>
  
            <div className='col-card'>
              <div className='row-card-inner'>
                <Gall images={img_inno.INNO}/>
              </div>
              <p className='p-color'>Design Thinking</p>
            </div>
          </div> 
        </section>
      );
    }
  }
  
  export default Portfolio;
