import {Component} from 'angular2/core';

@Component({
    selector: 'skill-comp',
    templateUrl: 'app/skill.component.html'
})
export class SkillComponent {
    skills = [
        {name: 'OpenCV', score: 3},
        {name: 'javascript', score: 3.5},
        {name: 'Python', score: 2.5},
        {name: 'java', score: 5},
        {name: 'Spring', score: 3.5},
        {name: 'Angular', score: 2.5},
        {name: 'PHP', score: 3},
        {name: 'C#', score: 5},
        {name: 'NodeJS', score: 4},
        {name: 'WebGL', score: 3}
    ];
}
