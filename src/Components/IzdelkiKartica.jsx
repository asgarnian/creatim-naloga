import React from 'react';



export default function IzdelkiKartica(props) {

    return (
        <div className="izdelki-kartica">
            <p>{props.ime}</p>
            <img className="izdelki-slika" src={props.imgSrc} />
            <p>{props.cena} €</p>
            {/*props.imgSrc ? <div>Ni poDATKA</div> : <div>BBBDSDBBSBS</div>*/}
        </div>
    )
}