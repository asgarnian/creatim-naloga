import React, {useState} from 'react';

export default function Prva() {

    const [stanje,setStanje] = useState(izpisStevil());

    function izpisStevil(){
        let izpis="";
        for(let i=1; i<=100; i++){

            if(i%3==0 && i%5==0){
                izpis+="Trojka + Petka";
            }else if(i%3==0){
                izpis+="Trojka";
            }else if(i%5==0){
                izpis+="Petka";
            }else{
                izpis+=i;
            }
            izpis+=" ";

        }
        return izpis;
    }

    function spremeniStanje(){
        setStanje( stanje+izpisStevil());
    }

    return (
        <>
            <div id="prva" className="">

                {stanje}

            </div>
            <button onClick={spremeniStanje}>NALOZI</button>

        </>
    )

}