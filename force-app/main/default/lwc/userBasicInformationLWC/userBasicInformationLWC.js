import { LightningElement } from 'lwc';
import getUserBasicInformation from '@salesforce/apex/UserBasicInformationRestResource.getUserBasicInformation';

export default class UserBasicInformationLWC extends LightningElement {
    userEmailId = '';
    userData;
    errorMessage;

    handleEmailChange(event) {
        this.userEmailId = event.target.value;
    }

    handleButtonClick() {
        if (this.userEmailId) {
            this.getUserInformation();
        }
    }

    getUserInformation() {
        getUserBasicInformation({ userEmailId: this.userEmailId })
            .then(result => {
                this.userData = result;
                this.errorMessage = null;
            })
            .catch(error => {
                this.userData = null;
                this.errorMessage = error.body.message;
            });
    }

    get isDataAvailable() {
        return this.userData && !this.userData.error;
    }

    get userInformation() {
        return this.userData && this.userData.data ? this.userData.data : {};
    }
}
