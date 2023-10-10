import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class VerticalNavigation extends NavigationMixin(LightningElement) {
    selectedItem = 'accounts'; // Set the default selected item

    handleNavigation(event) {
        const selectedName = event.detail.name;
        switch (selectedName) {
            case 'accounts':
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Account',
                        actionName: 'list'
                    }
                });
                break;
            case 'contacts':
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Contact',
                        actionName: 'list'
                    }
                });
                break;
            case 'opportunity':
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Opportunity',
                        actionName: 'list'
                    }
                });
                break;
            default:
                // Handle other items as needed
                break;
        }
    }
}
