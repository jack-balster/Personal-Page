import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const { theme } = useContext(ThemeContext);

    // Function to toggle visibility of the button based on scroll position
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Add event listener to track scrolling
    window.addEventListener('scroll', toggleVisible);

    // Define styles for the icon using theme
    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '3rem',
            color: theme.tertiary,
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    );
}

export default BackToTop;
