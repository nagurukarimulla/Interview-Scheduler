import { LightningElement, wire } from 'lwc';
import getAccountsWithOpportunities from '@salesforce/apex/OpportunityController.getAccountsWithOpportunities';
import { NavigationMixin } from 'lightning/navigation';

export default class OpportunityManager extends NavigationMixin(LightningElement) {
    accounts;

    @wire(getAccountsWithOpportunities)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            console.log('Accounts and Opportunities:', this.accounts);
        } else if (error) {
            console.error(error);
        }
    }

    handleCreateOpportunity(event) {
        const accountId = event.currentTarget.dataset.id;
        // Use the NavigationMixin to navigate to the opportunity creation page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new',
                relationshipApiName: 'AccountId',
                recordId: accountId,
            },
        });
    }

    handleEditAccount(event) {
        const accountId = event.currentTarget.dataset.id;
        // Use the NavigationMixin to navigate to the account edit page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: accountId,
                actionName: 'edit',
            },
        });
    }
}
