import {Component} from 'angular2/core';

@Component({
    selector: 'block-comp',
    templateUrl: 'app/block.component.html'
})
export class BlockComponent {
    paragraphs = ["Joseph Vissarionovich Stalin (/ˈstɑːlɪn/;[1] birth surname: Jughashvili; 18 December 1878[2] – 5 March 1953) was the leader of the Soviet Union from the mid-1920s until his death in 1953. Holding the post of the General Secretary of the Central Committee of the Communist Party of the Soviet Union, he was effectively the dictator of the state.",
        "Stalin was one of the seven members of the first Politburo, founded in 1917 in order to manage the Bolshevik Revolution, alongside Lenin, Zinoviev, Kamenev, Trotsky, Sokolnikov and Bubnov.[3] Among the Bolshevik revolutionaries who took part in the Russian Revolution of 1917, Stalin was appointed General Secretary of the party's Central Committee in 1922. He subsequently managed to consolidate power following the 1924 death of Vladimir Lenin by suppressing Lenin's criticisms (in the postscript of his testament) and expanding the functions of his role, all the while eliminating any opposition. He remained General Secretary until the post was abolished in 1952, concurrently serving as the Premier of the Soviet Union from 1941 onward.",
        "Stalin led the Soviet Union through its post-war reconstruction phase, which saw a significant rise in tension with the Western world that would later be known as the Cold War. During this period, the USSR became the second country in the world to successfully develop a nuclear weapon, as well as launching the Great Plan for the Transformation of Nature in response to another widespread famine and the Great Construction Projects of Communism. In the years following his death, Stalin and his regime have been condemned on numerous occasions, most notably in 1956 when his successor Nikita Khrushchev denounced his legacy and initiated a process of de-Stalinization. Stalin remains a controversial figure today, with many regarding him as a tyrant.[10] However, popular opinion within the Russian Federation is mixed.[11][12][13] The exact number of deaths caused by Stalin's regime is still a subject of debate, but it is widely agreed to be in the order of millions."
    ];
}
