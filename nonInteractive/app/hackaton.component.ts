import {Component} from 'angular2/core';

@Component({
    selector: 'hackaton-comp',
    templateUrl: 'app/block.component.html'
})
export class HackatonComponent {
    jump_id = "hackaton";
    title = "Bose Sound Touch Hackaton!";
    paragraphs = [
        ""
    ];
}
