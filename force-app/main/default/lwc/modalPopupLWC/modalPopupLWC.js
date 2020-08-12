import { LightningElement, track } from 'lwc';

export default class ModalPopupLWC extends LightningElement {
    @track openmodel = false;
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    saveMethod() {
        this.closeModal();
    }
}