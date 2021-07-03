import React from 'react'
import react from '../images/react.png'
import ant from '../images/ant.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-view">
                <div style={{ fontWeight: 600 }}>Made with:</div>

                <img src={react} alt="yo" className="logo" />
                <img src={ant} alt="yo" className="logo" />
                <p>© Mafaro Mushonga 2021</p>
            </div>
        </footer >
    )
}
