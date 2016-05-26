import {Component} from 'angular2/core';

@Component({
    selector: 'whoishe-comp',
    templateUrl: 'app/block.component.html'
})
export class WhoisheComponent {
    jump_id = "who-am-i";
    title = "Who am i?";
    paragraphs = [
        "I'm Tom Valkeneers, born at the 14th of august 1995. I'm from Hoeselt. ",
        "My spare time is spend on Kazou. Kazou is an Organization that organizes vacations for childeren and teenagers. In Belgium and the rest of Europe. My role in this organization is vacation lead. In other words i organize the vacation and coach the other team members. It gives me a lott of joy and relief! Going on a Kazou vacation is like stressing out! Playing with the kids, choaching my team and organizing the whole vacation is fun and satisfying.",
        "The rest of the time i spend playing around with various new technologies, small projects to learn new things and some IoT with my Arduino and Raspberry Pi. I love it when i can amaze people or make them laugh with something i made. Programming is something i love, not because of programming itself, but because you can make so many cool things with it! For me the product is more important than the programming. I love to make a product, not a program or app or website."
    ];
}
