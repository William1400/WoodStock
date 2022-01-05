import React from 'react'
import './Content.css'
import imageLeft from '../img/chaisegauche.png'
import imageRight from '../img/chaisedroite.png'


export default function Content() {

    const title1 = 'About Us'
    const title2 = 'Shop'
    const text = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."


    return (

        <div className="container">
            <div className="up">
                <div className='up-image'>
                    <img src={imageLeft} className='img-left'></img>
                </div>
                <div className='up-text-area'>
                    <h4 className='up-title'>{title1}</h4>
                    <p className='paragraphe'>{text}</p>
                    <div className='button-style'>
                        <div>
                            <button className='button'>Learn More</button>
                        </div>
                        <div>
                            <hr className='hr-content'></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div className="down">
                <div className='down-text-area'>
                    <h4 className='down-title'>{title2}</h4>
                    <p className='paragraphe'>{text}</p>
                    <div className='button-style'>
                        <div>
                            <button className='button'>Go Shopping</button>
                        </div>
                        <div>
                            <hr className='hr-content'></hr>
                        </div>
                    </div>
                </div>
                <div className='down-image'>
                        <img src={imageRight} className='img-right'></img>
                    </div>
            </div>
        </div>

    )
}


