import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';


export default class InputFieldComp extends Component {

  // Properties used by this component:
  // visualStateIndex

  constructor(props) {
    super(props);
    
    this.state = {
      phoneNumber: '',
      companyName: '',
      workAddr: '',
      homeAddr: '',
      driver: '',
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  textInputChanged_phoneNumber = (event) => {
    this.setState({phoneNumber: event.target.value});
    this.props.appActions.updateDataSlot("ds_phone", event.target.value);
  }
  
  textInputChanged_companyName = (event) => {
    this.setState({companyName: event.target.value});
    this.props.appActions.updateDataSlot("ds_companyName", event.target.value);
  }
  
  textInputChanged_workAddr = (event) => {
    this.setState({workAddr: event.target.value});
    this.props.appActions.updateDataSlot("ds_workAddr", event.target.value);
  }
  
  textInputChanged_homeAddr = (event) => {
    this.setState({homeAddr: event.target.value});
    this.props.appActions.updateDataSlot("ds_homeAddr", event.target.value);
  }
  
  pickerValueChanged_driver = (event) => {
    this.setState({driver: event.target.value});
    this.props.appActions.updateDataSlot("ds_driver?", event.target.value);
  }
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elPhoneNumber = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
     };
    const style_state0_elPhoneNumber_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elCompanyName = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
     };
    const style_state0_elCompanyName_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elWorkAddr = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
     };
    const style_state0_elWorkAddr_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elHomeAddr = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
     };
    const style_state0_elHomeAddr_outer = {
        pointerEvents: 'auto',
     };
    const style_state0_elTextBlock = {
        fontSize: 15.1,
        color: 'black',
        textAlign: 'left',
     };
    let selection_driver = this.state.driver;
    // Source datasheet and selected data column for picker element 'driver?'
    const dataSource_driver = this.props.appActions.getDataSheet('driverChoice');
    const columnName_driver = 'Driver?';
    
    const style_state0_elDriver_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="InputFieldComp" style={baseStyle}>
        <div className="layoutFlow">
          <div className='state0_elPhoneNumber' style={style_state0_elPhoneNumber_outer}>
            <Input style={style_state0_elPhoneNumber} type="tel" hint={this.props.locStrings.comp3_phonenumber_859601} onChange={this.textInputChanged_phoneNumber} value={this.state.phoneNumber}  />
          
          </div>
          
          <div className='state0_elCompanyName' style={style_state0_elCompanyName_outer}>
            <Input style={style_state0_elCompanyName} type="text" hint={this.props.locStrings.comp3_companyname_538984} onChange={this.textInputChanged_companyName} value={this.state.companyName}  />
          
          </div>
          
          <div className='state0_elWorkAddr' style={style_state0_elWorkAddr_outer}>
            <Input style={style_state0_elWorkAddr} type="text" hint={this.props.locStrings.comp3_workaddr_889849} onChange={this.textInputChanged_workAddr} value={this.state.workAddr}  />
          
          </div>
          
          <div className='state0_elHomeAddr' style={style_state0_elHomeAddr_outer}>
            <Input style={style_state0_elHomeAddr} type="text" hint={this.props.locStrings.comp3_homeaddr_1012641} onChange={this.textInputChanged_homeAddr} value={this.state.homeAddr}  />
          
          </div>
          
          <div className='font-appleGothic  state0_elTextBlock'>
            <div style={style_state0_elTextBlock}>
              <div>{this.props.locStrings.comp3_textblock_11615}</div>
            </div>
          
          </div>
          
          <div className='baseFont state0_elDriver' style={style_state0_elDriver_outer}>
            <Select  onChange={this.pickerValueChanged_driver} value={selection_driver} >
              {dataSource_driver.items.map(item => {
                const colValue = item[columnName_driver];
                return <Option key={item.key} value={colValue} label={colValue} />
              })}
            </Select>
          
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
      <div className="InputFieldComp" style={baseStyle}>
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
