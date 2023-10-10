import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import getOpportunities from '@salesforce/apex/OppController.getOpportunities';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class AccountOpportunityContactLookup extends LightningElement {
    @track accountName = '';
    @track showAccountOptions = false;
    @track selectedAccountId = '';
    @track accountOptions = [];
    @track contacts = [];

    // Load account options when input changes
    handleAccountSearch(event) {
        this.accountName = event.target.value;
        if (this.accountName.length >= 2) {
            getAccounts({ accountName: this.accountName })
                .then(result => {
                    this.accountOptions = result.map(acc => ({ label: acc.Name, value: acc.Id }));
                    this.showAccountOptions = true;
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            this.showAccountOptions = false;
            this.accountOptions = [];
        }
    }

    // Handle account selection
    handleAccountSelection(event) {
        this.selectedAccountId = event.detail.value;
        this.loadOpportunities();
        this.loadContacts();
    }

    // Load opportunities for the selected account
    loadOpportunities() {
        if (this.selectedAccountId) {
            getOpportunities({ accountId: this.selectedAccountId })
                .then(result => {
                    // Process and display opportunities here
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    // Load contacts for the selected account
    loadContacts() {
        if (this.selectedAccountId) {
            getContacts({ accountId: this.selectedAccountId })
                .then(result => {
                    this.contacts = result;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    // Handle edit button click for a contact
    handleEditContact(event) {
        const contactId = event.target.value;
        // Implement edit logic here
    }

    // Handle delete button click for a contact
    handleDeleteContact(event) {
        const contactId = event.target.value;
        // Implement delete logic here
    }
}
