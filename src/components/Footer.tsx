import React from 'react'
import react from '../images/react.png'
import ant from '../images/ant.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-view">
                <div style={{ fontWeight: 700 }}>This site is made with:</div>

                <a href="https://reactjs.org" target="_blank" rel="noreferrer"><img src={react} alt="yo" className="logo" /></a>
                <a href="https://ant.design/" target="_blank" rel="noreferrer"><img src={ant} alt="yo" className="logo" /></a>

                <p>© Mafaro Mushonga 2021</p>
            </div>
        </footer >
    )
}
