import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    // Function to shorten name if it is longer than 10 characters
    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    // Access theme from ThemeContext
    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                by {shortname(headerData.name)}
            </p>
        </div>
    )
}

export default Footer
