// navItemsExample.js
import { LightningElement, wire } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi';
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class NavItemsExample extends LightningElement {
    tabs = ['standard-Account', 'standard-CollaborationGroup'];

    @wire(getNavItems, {
        formFactor: FORM_FACTOR,
        navItemNames: '$tabs',
        pageSize: 30,
    })
    propertyOrFunction;
}
