// wireGetRelatedListCount.js
import { LightningElement, wire } from "lwc";
import { getRelatedListCount } from "lightning/uiRelatedListApi";
export default class WireGetRelatedListCount extends LightningElement {
  error;
  responseData;
  @wire(getRelatedListCount, {
    parentRecordId: "0015g00000t6tXmAAI",
    relatedListId: "Contacts",
  })
  listInfo({ error, data }) {
    if (data) {
      this.responseData = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.responseData = undefined;
    }
  }
}