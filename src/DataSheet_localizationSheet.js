import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "screen3_textblock_846939";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_textblock2_585676";
    item['en'] = "Hello ";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_textblock3_116760";
    item['en'] = "Saarthak";
    
    item = {};
    this.items.push(item);
    item['key'] = "username";
    item['en'] = "saarthak";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_779886";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "newbutton";
    item['en'] = "Edit Profile";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_649910";
    item['en'] = "Edit Profile";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text_28482";
    item['en'] = "Hop In Microtransit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text_655587";
    item['en'] = "Hop In Microtransit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_welcome_73387";
    item['en'] = "Hop In Microtransit";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text_530076";
    item['en'] = "Welcome";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_textcopy_941799";
    item['en'] = "username";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_field_299996";
    item['en'] = "Home Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_field_191386";
    item['en'] = "Work Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_fieldcopy_839646";
    item['en'] = "Company Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_fieldcopy2_258793";
    item['en'] = "Phone Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_textblock_907958";
    item['en'] = "Are you signing up as a driver?";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_632221";
    item['en'] = "Save";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_text_171571";
    item['en'] = "Hop In Microtransit";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_welcome_19561";
    item['en'] = "Welcome";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_usn_840532";
    item['en'] = "saarthak";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_phonenumber_338440";
    item['en'] = "Phone Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_companyname_481599";
    item['en'] = "Company Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_workaddr_678428";
    item['en'] = "Work Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock_847856";
    item['en'] = "Are you signing up as a driver?";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_homeaddr_992103";
    item['en'] = "Home Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_save_375954";
    item['en'] = "Save";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp2_welcome_76759";
    item['en'] = "Welcome";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp2_usn_740352";
    item['en'] = "saarthak";
    
    item = {};
    this.items.push(item);
    item['key'] = "thankyou_textblock_302988";
    item['en'] = "Thank you";
    
    item = {};
    this.items.push(item);
    item['key'] = "thankyou_textblock2_994450";
    item['en'] = "Please check back in a couple hours for your new ride groups.";
    
    item = {};
    this.items.push(item);
    item['key'] = "logingate_text_892011";
    item['en'] = "Please wait….";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_phonenumber_859601";
    item['en'] = "Phone Number";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_companyname_538984";
    item['en'] = "Company Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_workaddr_889849";
    item['en'] = "Work Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_homeaddr_1012641";
    item['en'] = "Home Address";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_textblock_11615";
    item['en'] = "Are you signing up as a driver?";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
