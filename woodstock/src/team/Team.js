import React from 'react'
import './Team.css'
import footer from '../img/footer.png'
import logo from '../img/logo.png'

export default function Footer() {

    const texte = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
    const title2 = 'Good Mindset'

    return (

        <div className="footer">
            <div className="image">
                <img src={footer} alt="team-image" className="team-image"></img>
            </div>
            <div className='log'>
                <img src={logo}></img>
            </div>
            <div className="text-content">
                <div className="description">
                    <h1 className='title2'>{title2}</h1>
                    <p className='texte'>{texte}</p>
                </div>
                <div className="button-style">
                    <div>
                        <button className='button-footer'>Meat the team</button>
                    </div>
                    <div>
                        <hr className='hr'></hr>
                    </div>
                </div>
            </div>
        </div>
    )

}