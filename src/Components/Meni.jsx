import React from 'react';

export default function Meni() {
    let spremenljivka="Domov";



    return (
        <>
            <div id="glava">
                <div id="glava-start">
                    <h1>Jernej Poženel <img src="https://www.creatim.com/images/logos/logo.svg"></img> Naloga 6</h1>
                </div>
                <div id="meni-sticky">
                    <div id="meni-okvir">
                        <a className="menu-btn" href="">Projekti</a>
                        <a className="menu-btn" href="">Znanja</a>
                        <a className="menu-btn" href="">Hobiji</a>

                    </div>
                    <div id="mega-meni">
                        <div className="mega-meni-category">
                            <a className="menu-btn" href="">Projekti</a>
                            <a className="menu-btn" href="">Znanja</a>
                            <a className="menu-btn" href="">Hobiji</a>
                        </div>
                        <div className="mega-meni-category">
                            <a className="menu-btn" href="">Projekti</a>
                            <a className="menu-btn" href="">Znanja</a>
                            <a className="menu-btn" href="">Hobiji</a>
                        </div>
                        <div className="mega-meni-category">
                            <a className="menu-btn" href="">Projekti</a>
                            <a className="menu-btn" href="">Znanja</a>
                            <a className="menu-btn" href="">Hobiji</a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}