import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_driverChoice extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['Driver?'] = "yes";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Driver?'] = "no";
    item.key = key++;
  }

}
