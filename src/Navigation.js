// Schritt 1: import react
import React from 'react'

// Schritt 2: Component erstellen
// Name des Component groß schreiben und Funktion mit "return" starten
function Navigation() {
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

//Schritt 3: Component exportieren
export default Navigation