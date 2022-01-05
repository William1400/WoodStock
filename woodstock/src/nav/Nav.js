import React, {useState, useEffect} from 'react'
import './Nav.css'
import logo from '../img/logo.png'

export default function Navbar() {
   
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {

        setToggleMenu(!toggleMenu);
    
    } 
       
    useEffect(() => {

        const changeWidth = ()  => {

            setLargeur(window.innerWidth);
            
            if (window.innerWidth > 500) {

                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {

            window.removeEventListener('resize', changeWidth);
        }

        
    }, [])

    return (

        <nav>
            {(toggleMenu || largeur > 500 ) && (

                <ul className='liste'>
                    <img src={logo} alt='wood logo' className='logo'></img>
                    <li className='items'>About</li>
                    <li className='items'>Furnitures</li>
                    <li className='items'>Shop</li>
                    <li className='items'>Contact</li>
                </ul>
            )}
           <button onClick={toggleNavSmallScreen} className='btn'>B</button>
        </nav>
    )
}
