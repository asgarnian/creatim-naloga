import React, {useState, Component} from 'react';
import IzdelkiKartica from "./IzdelkiKartica";
//import {izdelek} from "../podatki";
import SlideItem from "./SlideItem";


export default function Izdelki() {
    let izdelek = [
        {name: "Orodje",price: 250.6, slika: "https://gorgre.si/resizedImg/small_2037.jpg" },
        {name: "Orodje2",price: 150, slika: "https://gorgre.si/resizedImg/small_85334.jpg" },
        {name: "Orodje3",price: 220.2, slika: "https://gorgre.si/resizedImg/small_6056.jpg" },
        {name: "Orodje4",price: 50.99, slika: "https://gorgre.si/resizedImg/small_9657.jpg" },
        {name: "Orodje",price: 250.6, slika: "https://gorgre.si/resizedImg/small_2037.jpg" },
        {name: "Orodje2",price: 150, slika: "https://gorgre.si/resizedImg/small_85334.jpg" },
        {name: "Orodje3",price: 220.2, slika: "https://gorgre.si/resizedImg/small_6056.jpg" },
        {name: "Orodje4",price: 50.99, slika: "https://gorgre.si/resizedImg/small_9657.jpg" }

    ];

    const [stanje,setStanje] = useState(izdelek);

    function randomIzdelek(){
        let ime,price,slika;
        let randomSlike=["https://gorgre.si/resizedImg/small_2037.jpg","https://gorgre.si/resizedImg/small_85334.jpg","https://gorgre.si/resizedImg/small_6056.jpg","https://gorgre.si/resizedImg/small_9657.jpg","https://gorgre.si/resizedImg/small_6055-1_02.jpg","https://gorgre.si/resizedImg/small_9337.jpg","https://gorgre.si/resizedImg/small_BVA_Hydraulics_P601S_600x600.jpg","https://gorgre.si/resizedImg/small_23212_webshop.jpg"]
        ime= "Orodje "+Math.floor(Math.random() * 100);
        price=Math.floor(Math.random() * 1000);
        slika=randomSlike[Math.floor(Math.random() * randomSlike.length)];


        return {name: ime,price:price,slika:slika};
    }

    function naloziIzdelke(){

        izdelek.push(randomIzdelek());
        izdelek.push(randomIzdelek());
        izdelek.push(randomIzdelek());
        izdelek.push(randomIzdelek());

        console.log(izdelek);
        setStanje(izdelek);

    }



    return (
        <>
            <div id="izdelki">
                {stanje.map((element, index) => {
                    return (<IzdelkiKartica
                            key={index}
                            imgSrc={element.slika}
                            ime={element.name}
                            cena={element.price}
                        />
                    )
                })}
            </div>

            <button onClick={naloziIzdelke}>NALOZI</button>

        </>
    )
}