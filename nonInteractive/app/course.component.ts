import {Component} from 'angular2/core';

@Component({
    selector: 'course-comp',
    templateUrl: 'app/block.component.html'
})
export class CourseComponent {
    jump_id = "cource";
    title = "Tutoring!";
    paragraphs = [
        ""
    ];
}
