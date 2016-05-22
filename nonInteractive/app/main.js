System.register(['angular2/platform/browser', './nav.component', './title.component', './block.component', './imagestrap.component', './skill.component', './overview.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, nav_component_1, title_component_1, block_component_1, imagestrap_component_1, skill_component_1, overview_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (title_component_1_1) {
                title_component_1 = title_component_1_1;
            },
            function (block_component_1_1) {
                block_component_1 = block_component_1_1;
            },
            function (imagestrap_component_1_1) {
                imagestrap_component_1 = imagestrap_component_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(nav_component_1.NavComponent);
            browser_1.bootstrap(block_component_1.BlockComponent);
            browser_1.bootstrap(title_component_1.TitleComponent);
            browser_1.bootstrap(imagestrap_component_1.ImagestrapComponent);
            browser_1.bootstrap(skill_component_1.SkillComponent);
            browser_1.bootstrap(overview_component_1.OverviewComponent);
        }
    }
});
//# sourceMappingURL=main.js.map