import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_users extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "userId";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['userId'] = "001";
    item['WorkAddr'] = "test";
    item['HomeAddr'] = "test";
    item['document_key'] = "001";
    item['CompanyName'] = "test";
    item['PhoneNumber'] = "test";
    item['isDriver'] = "1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['userId'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['WorkAddr'] = "10 Dundas St. E, Toronto, ON";
    item['HomeAddr'] = "70 Mill St., Toronto, ON M5A 4R1";
    item['document_key'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['CompanyName'] = "Hop In ";
    item['PhoneNumber'] = "6472317473";
    item['isDriver'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['userId'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['WorkAddr'] = "";
    item['HomeAddr'] = "";
    item['document_key'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['CompanyName'] = "";
    item['PhoneNumber'] = "";
    item['isDriver'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['userId'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['WorkAddr'] = "test";
    item['HomeAddr'] = "test";
    item['document_key'] = "L2GgTfzQxvgG6BEXdwQL9EMfMAE3";
    item['CompanyName'] = "test";
    item['PhoneNumber'] = "1231200321";
    item['isDriver'] = "";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
