import React from 'react'

const Alert = ({ message, tryAgain, selectedWord}) => {
    return (
        <div className="popup-container" style={message !== '' ? { display: 'flex' } : {}}>
            <div className="popup">
                <h2>{message}</h2>
                <h4>Word is {selectedWord}</h4>
                <button onClick={tryAgain}>Try Again</button>
            </div>
        </div>
    )
}
export default Alert
