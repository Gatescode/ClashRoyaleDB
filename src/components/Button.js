import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];

const sizes = ['btn--medium', 'btn-large'];

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
                       }) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]; //checks if styles include buttonStyle, and if not, use style[0]

    const checkButtonSize = styles.includes(buttonSize) ? buttonSize : sizes[0]; //checks if sizes include buttonSize, and if not, use size[0]


    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} btn ${checkButtonSize}`} //The button checks the sizes and styles when the button is clicked
                onClick = {onClick}
                type = {type}
            >
                {children}
            </button>
        </Link>
    )
}