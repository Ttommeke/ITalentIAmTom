import {Component} from 'angular2/core';

@Component({
    selector: 'cebit-comp',
    templateUrl: 'app/block.component.html'
})
export class CebitComponent {
    jump_id = "cebit";
    title = "Cebit!";
    paragraphs = [
        ""
    ];
}
