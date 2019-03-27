import React, { Component } from 'react';
import './App.css';
import WelcomeUSNComp from './WelcomeUSNComp';
import InputFieldComp from './InputFieldComp';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class FormComp extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elSave = (ev) => {
    this.sendData_save_to_users();
  
    // Clear internal state for data-providing elements in this component
    this.setState({
      hopinheader: (<div></div>),
      hopinheader_plainText: "",
    });
  
    let newVal = "yes";
    this.props.appActions.updateDataSlot('ds_done', newVal);
  
    // Go to screen 'TYScreen'
    this.props.appActions.goToScreen('tyscreen', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  sendData_save_to_users = () => {
    const dataSheet = this.props.appActions.getDataSheet('users');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      userId: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_uID'] : ''),
      isDriver: this._state0_elUserForm623893.state.driver,
      HomeAddr: this._state0_elUserForm623893.state.homeAddr,
      document_key: this._state0_elUserForm623893.state.phoneNumber,
      CompanyName: this._state0_elUserForm623893.state.companyName,
      PhoneNumber: this._state0_elUserForm623893.state.phoneNumber,
      WorkAddr: this._state0_elUserForm623893.state.workAddr,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('users', row);
    } else {
      this.props.appActions.addToDataSheet('users', row);
    }
  }
  
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elHopinHeader = {
        fontSize: 30.1,
        color: 'black',
        textAlign: 'left',
     };
    const style_state0_elSave = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elSave_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="FormComp" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-helveticaNeue  state0_elHopinHeader'>
            <div style={style_state0_elHopinHeader}>
              <div>{this.props.locStrings.comp1_text_171571}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps state0_elWelcomeUserText'>
            <div>
              <WelcomeUSNComp visualStateIndex={this.props.ds_done} ref={(el)=> this._state0_elWelcomeUserText = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps state0_elUserForm623893'>
            <div>
              <InputFieldComp visualStateIndex={this.props.ds_done} ref={(el)=> this._state0_elUserForm623893 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='actionFont state0_elSave' style={style_state0_elSave_outer}>
            <Button style={style_state0_elSave}  color="accent" onClick={this.onClick_state0_elSave} >
              {this.props.locStrings.comp1_save_375954}
            </Button>
          
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
    
    
    return (
      <div className="FormComp" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps state1_elUserForm623893'>
            <div>
              <InputFieldComp visualStateIndex={this.props.ds_done} ref={(el)=> this._state1_elUserForm623893 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
