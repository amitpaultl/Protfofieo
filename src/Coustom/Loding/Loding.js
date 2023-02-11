import React from 'react';
import img from '../Asserts/image/loading-icons.gif'
const Loding = () => {
    return (
        <div>
            <div className="loading mx-auto">
                <img src={img} className="mx-auto" alt="" />
            </div>
        </div>
    );
};

export default Loding;