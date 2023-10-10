import { LightningElement } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import timeElements from "@salesforce/resourceUrl/timeElements";

export default class TimeElements extends LightningElement {
    isCmpInitialized = false;
    error;
    date;
  
    renderedCallback() {
      if (this.isCmpInitialized) {
        return;
      }
      this.isCmpInitialized = true;
  
      loadScript(this, timeElements)
        .then(() => {
          this.initializeComponent();
        })
        .catch((error) => {
          this.error = error;
        });
    }
    initializeComponent() {
      this.date = new Date();
    }
}