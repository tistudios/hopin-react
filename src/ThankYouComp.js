import React, { Component } from 'react';
import './App.css';


export default class ThankYouComp extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elRectangle = {
        background: 'rgba(0, 150, 255, 1.000)',
        boxShadow: '0.0px 0.0px 0px rgba(0, 0, 0, 0.3333)',
     };
    const style_elTextBlock = {
        fontSize: 47.3,
        color: '#feffff',
        textAlign: 'left',
     };
    const style_elTextBlock2 = {
        fontSize: 21.5,
        color: '#212121',
        textAlign: 'left',
     };
    
    return (
      <div className="ThankYouComp" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elRectangle' style={style_elRectangle} />
          <div className='font-helveticaNeueLight  elTextBlock' style={style_elTextBlock}>
            <div>{this.props.locStrings.thankyou_textblock_302988}</div>
          </div>
          <div className='font-futuraMedium  elTextBlock2' style={style_elTextBlock2}>
            <div>{this.props.locStrings.thankyou_textblock2_994450}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
