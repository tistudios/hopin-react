import React, { Component } from 'react';
import './App.css';
import LogingateScreen from './LogingateScreen';
import img_elImage from './images/Socialsignin_elImage_548429.jpg';


export default class Socialsignin extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_localizationSheet = this.props.appActions.getDataSheet('localizationSheet');
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('localizationSheet').items);
    
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="Socialsignin" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <LogingateScreen dataSheetId={'localizationSheet'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
