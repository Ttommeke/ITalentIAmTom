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
    var WhoisheComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WhoisheComponent = (function () {
                function WhoisheComponent() {
                    this.jump_id = "who-am-i";
                    this.title = "Who am i?";
                    this.paragraphs = [
                        "I'm Tom Valkeneers, born at the 14th of august 1995. I'm from Hoeselt. ",
                        "My spare time is spend on Kazou. Kazou is an Organization that organizes vacations for childeren and teenagers. In Belgium and the rest of Europe. My role in this organization is vacation lead. In other words i organize the vacation and coach the other team members. It gives me a lott of joy and relief! Going on a Kazou vacation is like stressing out! Playing with the kids, choaching my team and organizing the whole vacation is fun and satisfying.",
                        "The rest of the time i spend playing around with various new technologies, small projects to learn new things and some IoT with my Arduino and Raspberry Pi. I love it when i can amaze people or make them laugh with something i made. Programming is something i love, not because of programming itself, but because you can make so many cool things with it! For me the product is more important than the programming. I love to make a product, not a program or app or website."
                    ];
                }
                WhoisheComponent = __decorate([
                    core_1.Component({
                        selector: 'whoishe-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], WhoisheComponent);
                return WhoisheComponent;
            }());
            exports_1("WhoisheComponent", WhoisheComponent);
        }
    }
});
//# sourceMappingURL=whoishe.component.js.map