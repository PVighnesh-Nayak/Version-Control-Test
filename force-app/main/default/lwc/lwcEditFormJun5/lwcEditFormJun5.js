import { LightningElement, api } from 'lwc';

export default class LwcEditFormJun5 extends LightningElement {
    @api recordId = '0032w000002wCRYAA2';
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    }
}