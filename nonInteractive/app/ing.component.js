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
    var INGComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            INGComponent = (function () {
                function INGComponent() {
                    this.jump_id = "ing";
                    this.title = "ING agile development!";
                    this.paragraphs = [
                        "INLEIDING",
                        "In dit semenarie werd er ons uitgelegd hoe agile development werd toegepast bij ING. Ook de evaluatie van het proces en waar ING in de toekomst naar toe wou gaan in verband met scrum en sprints.",
                        "VERSLAG",
                        "Het verhaal begon bij mobile development. In 2009 had Frank Poncelet het idee dat er een mobile app moest komen voor ING. Hij ging naar de IT dienst gooide zijn idee neer en kreeg een \"ja, misschien... het lijkt ons wel een leuk idee!\". Waarop Frank zegt \"En ik ga dit op een Agile manier doen!\". Het was even stil in het lokaal... \"Frank... Da gaat nooit lukken!\" was de reactie. \"Geef mij een team en negen weken!\", \"Je krijgt zes weken\", \"Okay!\". Er werd een klein team verzameld, en development werd gestart aan de eerste mobile app. En dit agile! Het resultaat? Vijf jaar later werden alle projecten binnen ING op deze manier georganizeerd en stuurt Frank ongeveer acht teams aan.",
                        "De presentatie zelf was opgedeeld in twee delen. Twee korte sprints van elk een uur, na elk uur kon er feedback worden gegeven en of vragen gesteld. Elke sprint begon met een planning gevolgt door een uitleg met af en toe een Daily standup, en eindigde met een demo. Zoals je ziet was de presentatie gegeven op een agile manier. Er werd ons uitgelegd hoe ING dit aanpakte. Wat deed ING met zijn standups. Hoe plant ING zijn taken, hoe wordt er een volledig project in geplant? Bij mobile development word er gewerkt met sprints van drie weken. Bij de andere teams bedraagt een sprint twee weken. Dit zou komen door enkele technische restricties bij een mobile app die teams op andere niet mobiele projecten niet hebben. Aan het begin van deze drie weken word er een planning opgestelt met alle requirment die af gaan zijn aan het einde an deze drie weken. aan het einde van deze drie weken wordt er een demo gegeven aan enkele stakeholders en anderen. Deze stakeholders zullen dan kritiek geven of eventueel zeggen welke dingen er nog moeten veranderen. Dit kan zeer breed zijn. Van een kleur die moet worden aangepast tot een volledige technische calculatie.",
                        "de planning voor een volledig project wordt op het begin van een project opgesteld. En in de meeste gevallen wordt er nog eens een extra sprint aan toegevoegd. Dit is nodig om aan het einde van een project nog eens alles mooi op te kuisen. Of als buffer tijd voor mocht er iets groots zijn mis gelopen. De ervaring leert dat die extra sprint tot nu toe in elk project al is nodig geweest. Er wordt ook hevig gebruik gemaakt van stand up meetings. Deze meetings zijn gelimiteerd tot maximaal tien minuten. Wil je hierna nog verder babbelen over een bepaald probleem, dan kan je dat erna nog doen in de meeting room. Op die manier kan iedereen die er geen zaken mee heeft veerder werken en hoeven stand up meetings niet zo veel tijd in beslag te nemen. Dit alles wordt nog extra aangevuld met een KanBan schema. Dit is een soort todo lijst met verschillende kollommen. Het basis systeem is met 3 kollommen: todo, doing en done. Alle taken van één sprint komen in de taak ToDo. Hierna kan een taak bij doing worden gehangen wanneer deze door iemand wordt uitgevoert. En wanneer de taak is afgerond komt deze bij done terecht. Op deze manier is het relatief eenvoudig om te zien hoever een team staat.",
                        "REFLECTIE",
                        "Wat heeft dit verhaal mij bijgebracht? Dat is dat het ook mogelijk is voor grote bedrijven om iets nieuws toe te passen en hier ook een voorbeeld rol in te spelen. Grote bedrijven spelen het liever op safe, talen die hun nut al hebben bewezen, organisatie structuren die ze kennen en die iedereen kent, oplossingen voor problemen die gegarandeerd zijn om te werken. In de meeste gevallen zijn deze bedrijven net groot geworden door iets nieuws of gewaagt te doen. Mensen blijven graag in hun comfort zone als ze niet weten of het erbuiten beter of slechter is. Maar ik denk dat buiten je comforzone komen net het beste is wat je kan doen! je leert er het meeste door en je komt altijd op een betere plek uit. Zolang je je hoofdje maar gebruikt kan er niks mislopen. En ja... uiterraard loopt er wel eens iets mis, maar dit word vele malen gecompenseerd door de nieuwe mensen die je leert kennen en de nieuwe opporuniteiten die zich stellen.",
                        "ondernemersschap binnen een bedrijf is met andere woorden zeker iets zeer belangrijke en zou veel meer ondersteund en beloond moeten worden. Initiatief nemen is een zeer belangrijke karaktertrek aan een persoon. Het is een eigenschap die alleen weinig waard is. Maar in combinatie met bijvoorbeeld creativiteit of behulpzaamheid kan je er grote dingen mee doen!",
                        "Verder denk ik ook dat Agile development zeker de toekomst is. De wereld veranderd ook heel de tijd en wij moeten hierop reageren. Daarbij brengt elke verandering opportuniteiten met zich mee."
                    ];
                }
                INGComponent = __decorate([
                    core_1.Component({
                        selector: 'ing-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], INGComponent);
                return INGComponent;
            }());
            exports_1("INGComponent", INGComponent);
        }
    }
});
//# sourceMappingURL=ing.component.js.map