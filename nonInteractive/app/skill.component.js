System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SkillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SkillComponent = (function () {
                function SkillComponent() {
                    this.skills = [
                        { name: 'OpenCV', score: 3 },
                        { name: 'javascript', score: 3.5 },
                        { name: 'Python', score: 2.5 },
                        { name: 'java', score: 5 },
                        { name: 'Spring', score: 3.5 },
                        { name: 'Angular', score: 2.5 },
                        { name: 'PHP', score: 3 },
                        { name: 'C#', score: 5 },
                        { name: 'NodeJS', score: 4 },
                        { name: 'WebGL', score: 3 }
                    ];
                }
                SkillComponent = __decorate([
                    core_1.Component({
                        selector: 'skill-comp',
                        templateUrl: 'app/skill.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SkillComponent);
                return SkillComponent;
            }());
            exports_1("SkillComponent", SkillComponent);
        }
    }
});
//# sourceMappingURL=skill.component.js.map