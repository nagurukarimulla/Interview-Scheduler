import { LightningElement,track,api,wire } from 'lwc';
import getLeaveRecords from '@salesforce/apex/RegistrationForm.getLeaveRecords';

export default class ApplyLeave extends LightningElement {
@track grantedValues = {
    paidLeave: 0,
    advancedLeave: 0,
    bereavementLeave:0

  };
   email;

 @wire(getLeaveRecords, { loginEmail: '$email' })
  wiredLeaveRecords({ error, data }) {
    if (data) {
      console.log('data', data);

      // Assuming the field containing balance leaves is named "CEMS_Total_Leaves__c"
      this.grantedValues = {
        bereavementLeave :data[0].Granted_Bereavement_Leave__c,
        paidLeave: data[0].CEMS_Total_Leaves__c,
        advancedLeave: Granted_Advanced_Leave__c // You can assign the actual value from data[0] if it exists
      };
      console.log('grantedValues', this.grantedValues);
    } else if (error) {
      // Handle error
      console.error('Error retrieving leave records:', error);
    }
  }
}