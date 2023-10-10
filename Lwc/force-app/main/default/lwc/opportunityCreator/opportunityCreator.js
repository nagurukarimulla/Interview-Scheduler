import { LightningElement, track } from 'lwc';
import createOpportunity from '@salesforce/apex/OpportunityController.createOpportunity';

export default class OpportunityCreator extends LightningElement {
    @track opportunityName = '';
    @track stageName = '';
    @track amount = 0;
    @track closeDate = '';

    handleOpportunityNameChange(event) {
        this.opportunityName = event.target.value;
    }

    handleStageNameChange(event) {
        this.stageName = event.target.value;
    }

    handleAmountChange(event) {
        this.amount = event.target.value;
    }

    handleCloseDateChange(event) {
        this.closeDate = event.target.value;
    }

    handleCreateOpportunity() {
        createOpportunity({
            accountId: 'AccountId', // Replace with a valid Account Id
            opportunityName: this.opportunityName,
            stageName: this.stageName,
            amount: this.amount,
            closeDate: this.closeDate
        })
            .then(result => {
                // Handle successful opportunity creation
                console.log('Created Opportunity Id: ' + result.Id);
            })
            .catch(error => {
                // Handle error
                console.error('Error creating opportunity: ' + error);
            });
    }
}
