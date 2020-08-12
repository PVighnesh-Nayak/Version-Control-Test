import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingTrueFalse extends LightningElement {
    @track fname = false;
    @track lname = true;

    showFirstName() {
       this.fname=true;
       this.lname=true;
    }
    showLastName() {
       this.fname=false;
       this.lname=false;
    }
}