System.register(['angular2/platform/browser', './nav.component', './whoishe.component', './imagestrap.component', './skill.component', './overview.component', './amazone.component', './cebit.component', './course.component', './hackaton.component', './ing.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, nav_component_1, whoishe_component_1, imagestrap_component_1, skill_component_1, overview_component_1, amazone_component_1, cebit_component_1, course_component_1, hackaton_component_1, ing_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (whoishe_component_1_1) {
                whoishe_component_1 = whoishe_component_1_1;
            },
            function (imagestrap_component_1_1) {
                imagestrap_component_1 = imagestrap_component_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            },
            function (amazone_component_1_1) {
                amazone_component_1 = amazone_component_1_1;
            },
            function (cebit_component_1_1) {
                cebit_component_1 = cebit_component_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (hackaton_component_1_1) {
                hackaton_component_1 = hackaton_component_1_1;
            },
            function (ing_component_1_1) {
                ing_component_1 = ing_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(nav_component_1.NavComponent);
            browser_1.bootstrap(whoishe_component_1.WhoisheComponent);
            browser_1.bootstrap(imagestrap_component_1.ImagestrapComponent);
            browser_1.bootstrap(skill_component_1.SkillComponent);
            browser_1.bootstrap(overview_component_1.OverviewComponent);
            browser_1.bootstrap(amazone_component_1.AWSComponent);
            browser_1.bootstrap(cebit_component_1.CebitComponent);
            browser_1.bootstrap(course_component_1.CourseComponent);
            browser_1.bootstrap(hackaton_component_1.HackatonComponent);
            browser_1.bootstrap(ing_component_1.INGComponent);
        }
    }
});
//# sourceMappingURL=main.js.map