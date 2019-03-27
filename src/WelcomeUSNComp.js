import React, { Component } from 'react';
import './App.css';


export default class WelcomeUSNComp extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elUsn = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'black',
        textAlign: 'left',
     };
    const value_usn = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_uname'] : '');
    
    const style_elWelcome = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'black',
        textAlign: 'left',
     };
    
    return (
      <div className="WelcomeUSNComp" style={baseStyle}>
        <div className="foreground">
          <div className='elUsn' style={style_elUsn}>
            <div>{value_usn !== undefined ? value_usn : (<span className="propValueMissing">{this.props.locStrings.comp2_usn_740352}</span>)}</div>
          </div>
          <div className='elWelcome' style={style_elWelcome}>
            <div>{this.props.locStrings.comp2_welcome_76759}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
