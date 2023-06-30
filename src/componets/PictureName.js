import React from 'react';

const PictureName = ({ img, caption }) => {
    return (
        <div className="photo-display">
            <img src={img} alt={""} />
            <p>{caption}</p>
        </div>
    );
};

export default PictureName