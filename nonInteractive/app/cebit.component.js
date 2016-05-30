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
    var CebitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CebitComponent = (function () {
                function CebitComponent() {
                    this.jump_id = "cebit";
                    this.title = "Cebit!";
                    this.paragraphs = [
                        "INLEIDING",
                        "Cebit was een studiereis georganizeerd door de PXL voor het volledige derde jaar. Je bezocht er onderanderen de Cebit beurs maar ook een fabriek van Mercedes en Berlijn.",
                        "VERSLAG",
                        "Een reis van vier dagen werd dit. Woensdag ochtend vertrok een bus vol enthousiaste derdejaars studenten richting duitsland. De meesten hadden elkaar al even niet meer gezien door dat iedereen op met zijn stage bezig is. Na vijf uurtjes rijden, kwamen we aan onze eerste stop. Een deel van de groep werd afgezet aan de Reinssche post, de andere helft aan de Mercedes fabriek. In de mercedes fabriek werd een \"korte\" rondleiding gegeven van 2 uur, hoe een auto geproduceerd werd en welke stappen er voor nodig waren. Bij de Reinsche Post liet men het volledige productie proces zien. Van geautomatiseerde heftruks tot printers van zeven meter hoog. Hierna werd er doorgereisd naar ons eerste hotel. Rond 5 uur kwamen we aan en gingen we op jacht naar een avond maal! Gelukkig hebben ze in duitsland geweldige italianen die pizza bakken, dus ons geweer konden we ook weer opbergen. En na een gezellige avond in de cocktailbar, zat dag één er volledig op.",
                        "Donderdag ochtend! Klaar voor Cebit zelf. De oppervlakte van Cebit was enorm. 26 hallen die elk hun eigen thema hebben, plus al de bebrijven die buiten een extra stand hadden. Bijvoorbeeld Amazon. Het was zo groot, dat er op het terrein een pendel dienst aanwezig was van bussen. Enkele themas die in de hallen vertegenwoordigd waren: IoT, Startups/Developers, DataCenterDynamics, Buisness Security, ... Elke hal telden op zijn minst 300 standen. Er waren ook verschillende talks en andere kleine evenementjes. Wat wel opviel was dat het vooral gericht was op de buisness erachter. De meeste vertegenwoordigers aan een stand hadden als functie verkoper. Met andere woorden kenden ze zelf niet de technische uitleg. En dat is net waar studenten IT naar opzoek zijn. In de weinige gevallen dat er iemand technische bij stond, hadden ze vaak geen oog voor ons. Eventueel als je ze iets vroeg kwam er antwoord maar dit was zeer snel afgeblokt. Wat wel helpt is jezelf voorstellen als ondernemer van een IoT startup. Na de Cebit beurs reden we verder naar Berijn waar we s'nachts nog eens snel de stad verkenden en iets gingen drinken.",
                        "Wakker worden in Berijn, de stad die nooit slaapt. Om negen uur was het gids tijd. De groep werd opgedeeld in vier, en elke groep kreeg een gids mee. Hiermee gingen we door de straten van Berlijn. Eerst lang Checkpoint Charlie dat nog volledig in zijn originele sat aanwezig is. Daarna langs de muur en enkele monumenten over de muur. Ook het monument ter nagedachtenis van de joden mocht niet ontbreken en de vele gebouwen gebouwd tijdens het Hitler rigime samen met zijn bunker. In de namiddag bezochten we de klassieke stads kern. Samen met het Reichstagsgebäude en de Brandenburger Tor. Het is machtig om te zien. En het lijkt op de eerst zicht prachtig bewaard gebleven na de verschillende oorlogen en het communistische regime. Maar verschillende bebouwen zijn volledig gerestaureerd. Met betonnen muren, en een buiten wand van natuursteen is het bijna niet mogelijk een echte van een nep gebouw te onderscheiden. Ook de koperen en bronzen beelden en standbeelden zijn prachtig. Vooral de verhalen erachter.",
                        "Dag vier was enkel de busreis terug. Baai baai Berlijn!",
                        "REFLECTIE",
                        "De Cebit reis was een geweldige ervaring! Ik kon iedereen van mijn jaar terug zien en iedereen kon even ontspannen van de drukke stage periode. De Cebit beurs vond ik persoonlijk tegengevallen. Ik had er meer van verwacht. Vooral meer nieuwe dingen. We waren als eerste rechtstreeks richting de IoT hal gelopen. En hoewel daar technisch wel zeer interessante dingen werden voorgesteld waren dit niet de meest vernieuwende dingen. We liepen er voornamelijk rond en zeiden: \"Ken ik al..., Ken ik al..., Ken ik al..., Ooooh... Aaah nee... Ken ik al!\". Ik dacht dat we er de nieuwste snufjes zouden ontdekken, nieuwe ideeen zouden ontdekken of gewoon toffe producten zouden leren kennen. Wat ik wel zeer interessant vond aan de reis was Berlijn. Berlijn heeft super moderne stads gedeeltes, klassieke kernen en grote stads parken. Maar wat mij vooral boeide was zijn geschiedenis! Wat gebeurde er in de tweede wereld oorlog, hoe was het leven in de koude oorlog en hoe verliep de wederopbouw? Tegenover Berlijn hebben Londen of Parijs bijna niets te vertellen. Het is er nog zo levendig! Het is ook een boeiende stad zonder zijn geschiedenis. Er is altijd iets te doen en er is voor ieder wat wils. Om te eten om iets te gaan drinken. Park bezoeken of liever het klassieke centrum? Nee toch maar het nieuwe centrum! Ook is engels naast duits er de voertaal. Je moet geen duits kunnen om te wonen in Berlijn. Iedereen spreekt er engels. Persoonlijk denk ik dat dit de nieuwe standaard word. Multi culturele samenlevingen waar er niet één maar meerdere hoofd talen zijn. Berlijn is hier een zeer goed voorbeeld van."
                    ];
                }
                CebitComponent = __decorate([
                    core_1.Component({
                        selector: 'cebit-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CebitComponent);
                return CebitComponent;
            }());
            exports_1("CebitComponent", CebitComponent);
        }
    }
});
//# sourceMappingURL=cebit.component.js.map