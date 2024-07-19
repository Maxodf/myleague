import React from 'react';
import '../styles/loader.css';

const Loader = () => {
    return (
        <>
            <div className="loader">
                <div data-glitch="Loading..." className="glitch">Loading...</div>
            </div>
        </>
    )
}



export default Loader;