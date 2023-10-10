// wireGetRelatedListInfo.js
import { LightningElement, wire } from "lwc";
import { getRelatedListInfo } from "lightning/uiRelatedListApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class WireGetRelatedListInfo extends LightningElement {
  error;
  displayColumns;
  @wire(getRelatedListInfo, {
    parentObjectApiName: ACCOUNT_OBJECT.objectApiName,
    relatedListId: "Contacts",
   
  })
  listInfo({ error, data }) {
    if (data) {
      this.displayColumns = data.displayColumns;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.displayColumns = undefined;
    }
  }
}