import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class LogingateScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('userquestionnaire');
        
      }
    }, 50);
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LogingateScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div style={style_state0_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state0_elFirebaseLogin' style={style_state0_elFirebaseLogin_outer}>
            <div>
              <FirebaseLogin ref={(el)=> this._state0_elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state1_elText = {
        fontSize: 32.3,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen LogingateScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state1_elText'>
            <div style={style_state1_elText}>
              <div>{this.props.locStrings.logingate_text_892011}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.props.ds_done !== undefined) ? this.props.ds_done : 0, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
