import { Component, OnInit, Injectable } from 'angular2/core';

@Component({
    selector: 'overview-comp',
    templateUrl: 'app/overview.component.html'
})

export class OverviewComponent implements OnInit{

    hours = 0;
    hours_sience = 0;
    hours_lll = 0;
    hours_international = 0;
    hours_sp = 0;
    hours_semenaries = 0;

    activities = [
        {
            "title": "Vlaamse programeer wedstrijd(Flemish coding contest)",
            "description": "A coding contest where people from whole flanders take part. End result... 7th of 48 teams.",
            "location": "Thomas More",
            "date": "Date 06/03/2015",
            "time_past": 7,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": true,
            "student_participation": false
        },{
            "title": "SmartBeehive",
            "description": "Iot project where i build the Spring backend. With this little IoT device, you can messure realtime the temprature, humidity, weight, noise, ... of a beehive.",
            "location": "PXL-Research",
            "date": "From 01/03/2015 tot 07/06/2015",
            "time_past": 40,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "Seminary Intership",
            "description": "What do we need to know for our internship in our last semester.",
            "location": "PXL",
            "date": "Date 09/12/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "International drone week",
            "description": "Helping international students with their questions about Computer Vision and controlling a drone with your computer.",
            "location": "PXL, Droneport Sint Truiden",
            "date": "to 15/02/2016 to 19/02/2016",
            "time_past": 12,
            "own_idea": true,
            "international": true,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "SID-IN Genk",
            "description": "Helping 18 Year olds with their questions about Appliesd computer science.",
            "location": "Genk",
            "date": "Date 27/02/2016",
            "time_past": 6,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": false,
            "student_participation": true
        },{
            "title": "Tutoring Programming Basics",
            "description": "Helping first year student with their problems with Programming basics. Giving 3 private lessons of 2 hours each.",
            "location": "PXL",
            "date": "From 13/10/2014 to 9/11/2014",
            "time_past": 20,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "ING Agile Development",
            "description": "How does ING implement Agile development? And what advantages or disadvantages do they see.",
            "location": "PXL",
            "date": "Date 30/0/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Projectweek",
            "description": "The goal of this week was to become aware about everything around IT. What do you need to succeed in the IT-World. Softskills, management, een eigen bedrijf starten, were some of many topics discusded in this week.",
            "location": "PXL",
            "date": "From 02/02/2015 to 09/02/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "Windows Dev Day",
            "description": "What is new in the windows world? And how can we integrate these new things in a windows enviroment.",
            "location": "PXL Conference",
            "date": "Date 29/10/2015",
            "time_past": 8,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Putting The R Back In RAD Contribute",
            "description": "What is RAD, and what are the best practices of it.",
            "location": "PXL",
            "date": "Date 28/10/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "BPM(n)/Agile/RequirementsGathering by Contribute",
            "description": "A seminary about agile development, requirments atering and BPM(n) by Contribute.",
            "location": "pxl",
            "date": "Date 21/10/2015",
            "time_past": 7,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "CEBIT",
            "description": "A four day visit to Berlin and the CEBIT Conference! Organized by PXL-IT.",
            "location": "Hanover, Berlin",
            "date": "From 16/03/2016 to 19/03/2016",
            "time_past": 30,
            "own_idea": false,
            "international": true,
            "semenaries": false,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Amazone AWS Seminary",
            "description": "A seminary where they explained the basics of building a backend with Amazone AWS",
            "location": "Fenego Hasselt",
            "date": "Date 15/10/2015",
            "time_past": 2,
            "own_idea": true,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Bose Sound Touch hackaton",
            "description": "A hackaton, to see what is possible with a Bose Soundtouch. Made it to the second place, and won the price for most inovative backend from Amazone.",
            "location": "Corda Incubator",
            "date": "From 16/10/2015 to 18/10/2015",
            "time_past": 25,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": true,
            "student_participation": false
        },{
            "title": "Workshop Drones",
            "description": "A workshop where i learned the basics about controlling a Parrot AR drone with a computer.",
            "location": "PXL",
            "date": "From 30/11/2015 to 02/12/2015",
            "time_past": 12,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Tutoring Java Advanced",
            "description": "Helping first year student with their problems with Java Advanced. Giving 3 private lessons of 2 hours each.",
            "location": "PXL",
            "date": "From 13/10/2014 tot 9/11/2014",
            "time_past": 20,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        }
    ];

    ngOnInit() {
        for (let i = 0; i < this.activities.length; i++) {
            let activ = this.activities[i];
            this.hours += activ.time_past;

            if (activ.international) {
                this.hours_international += activ.time_past;
            }
            if (activ.lll) {
                this.hours_lll += activ.time_past;
            }
            if (activ.sience) {
                this.hours_sience += activ.time_past;
            }
            if (activ.student_participation) {
                this.hours_sp += activ.time_past;
            }
            if (activ.semenaries) {
                this.hours_semenaries += activ.time_past;
            }
        }
    }


}
