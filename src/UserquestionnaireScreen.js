import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Input from 'muicss/lib/react/input';


export default class UserquestionnaireScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      driver: '',
      homeAddr: '',
      workAddr: '',
      companyName: '',
      phoneNumber: '',
    };
  }

  onClick_elSave = (ev) => {
    this.sendData_save_to_users();
  
  
  }
  
  
  pickerValueChanged_driver = (event) => {
    this.setState({driver: event.target.value});
    this.props.appActions.updateDataSlot("ds_driver?", event.target.value);
  }
  
  textInputChanged_homeAddr = (event) => {
    this.setState({homeAddr: event.target.value});
    this.props.appActions.updateDataSlot("ds_homeAddr", event.target.value);
  }
  
  textInputChanged_workAddr = (event) => {
    this.setState({workAddr: event.target.value});
    this.props.appActions.updateDataSlot("ds_workAddr", event.target.value);
  }
  
  textInputChanged_companyName = (event) => {
    this.setState({companyName: event.target.value});
    this.props.appActions.updateDataSlot("ds_companyName", event.target.value);
  }
  
  textInputChanged_phoneNumber = (event) => {
    this.setState({phoneNumber: event.target.value});
    this.props.appActions.updateDataSlot("ds_phone", event.target.value);
  }
  
  sendData_save_to_users = () => {
    const dataSheet = this.props.appActions.getDataSheet('users');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      userId: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_uID'] : ''),
      WorkAddr: this.state.workAddr,
      HomeAddr: this.state.homeAddr,
      document_key: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_uID'] : ''),
      CompanyName: this.state.companyName,
      PhoneNumber: this.state.phoneNumber,
      isDriver: this.state.driver,
    };
    this.props.appActions.addToDataSheet('users', row);
  }
  
  
  render() {
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
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elText = {
        fontSize: 23.7,
        color: 'black',
        textAlign: 'left',
     };
    const style_elSave = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elDriver = {
        pointerEvents: 'auto',
     };
    let selection_driver = this.state.driver;
    // Source datasheet and selected data column for picker element 'driver?'
    const dataSource_driver = this.props.appActions.getDataSheet('driverChoice');
    const columnName_driver = 'Driver?';
    
    const style_elHomeAddr = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
        pointerEvents: 'auto',
     };
    const style_elTextBlock = {
        fontSize: 15.1,
        color: 'black',
        textAlign: 'left',
     };
    const style_elWelcome = {
        color: 'black',
        textAlign: 'left',
     };
    const style_elUsn = {
        color: 'black',
        textAlign: 'left',
     };
    const value_usn = (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_uname'] : '');
    
    const style_elWorkAddr = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
        pointerEvents: 'auto',
     };
    const style_elCompanyName = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
        pointerEvents: 'auto',
     };
    const style_elPhoneNumber = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'AppleGothic', sans-serif",
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen UserquestionnaireScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-futuraMedium  elText' style={style_elText}>
              <div>{this.props.locStrings.screen3_text_28482}</div>
            </div>
            <Button className='actionFont elSave' style={style_elSave}  color="accent" onClick={this.onClick_elSave} >
              {this.props.locStrings.screen3_button_632221}
            </Button>
            <Select className='baseFont elDriver' style={style_elDriver}  onChange={this.pickerValueChanged_driver} value={selection_driver} >
              {dataSource_driver.items.map(item => {
                const colValue = item[columnName_driver];
                return <Option key={item.key} value={colValue} label={colValue} />
              })}
            </Select>
            <Input className='elHomeAddr' style={style_elHomeAddr} type="text" hint={this.props.locStrings.screen3_field_299996} onChange={this.textInputChanged_homeAddr} value={this.state.homeAddr}  />
            <div className='font-appleGothic  elTextBlock' style={style_elTextBlock}>
              <div>{this.props.locStrings.screen3_textblock_907958}</div>
            </div>
            <div className='baseFont elWelcome' style={style_elWelcome}>
              <div>{this.props.locStrings.screen3_text_530076}</div>
            </div>
            <div className='baseFont elUsn' style={style_elUsn}>
              <div>{value_usn !== undefined ? value_usn : (<span className="propValueMissing">{this.props.locStrings.screen3_textcopy_941799}</span>)}</div>
            </div>
            <Input className='elWorkAddr' style={style_elWorkAddr} type="text" hint={this.props.locStrings.screen3_field_191386} onChange={this.textInputChanged_workAddr} value={this.state.workAddr}  />
            <Input className='elCompanyName' style={style_elCompanyName} type="text" hint={this.props.locStrings.screen3_fieldcopy_839646} onChange={this.textInputChanged_companyName} value={this.state.companyName}  />
            <Input className='elPhoneNumber' style={style_elPhoneNumber} type="tel" hint={this.props.locStrings.screen3_fieldcopy2_258793} onChange={this.textInputChanged_phoneNumber} value={this.state.phoneNumber}  />
          </div>
        </div>
      </div>
    )
  }
  

}
