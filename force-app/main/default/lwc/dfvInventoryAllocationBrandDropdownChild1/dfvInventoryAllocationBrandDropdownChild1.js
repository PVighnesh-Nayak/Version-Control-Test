import { LightningElement,track } from 'lwc';

export default class DfvInventoryAllocationBrandDropdownChild1 extends LightningElement {
value = 'option1';

get options() {
    return [
        { label: 'Option1', value: 'option1' },
        { label: 'Option2', value: 'option2' },
        { label: 'Option3', value: 'option3' },
    ];
}

}