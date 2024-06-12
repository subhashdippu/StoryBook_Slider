// src/Slider.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider as MUISlider } from '@mui/material';
import './Slider.css';

const Slider = ({ type, subtype, steps, handleSize }) => {
    const [value, setValue] = useState(subtype === 'Range' ? [0, 10] : 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(`Slider value changed to: ${newValue}`);
    };

    const handleSizeClass = handleSize === 'Size_24' ? 'handle-size-24' : 'handle-size-32';

    return (
        <div className={`slider-container ${handleSizeClass}`}>
            <MUISlider
                value={value}
                onChange={handleChange}
                marks={type === 'Discreet'}
                step={type === 'Discreet' ? (steps ? 10 / steps : 1) : null}
                min={0}
                max={10}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}`}
                className={`slider ${type.toLowerCase()} ${subtype.toLowerCase()}`}
            />
        </div>
    );
};

Slider.propTypes = {
    type: PropTypes.oneOf(['Continuous', 'Discreet']),
    subtype: PropTypes.oneOf(['Single', 'Range']),
    steps: PropTypes.number,
    handleSize: PropTypes.oneOf(['Size_24', 'Size_32']),
};

Slider.defaultProps = {
    type: 'Continuous',
    subtype: 'Single',
    steps: 10,
    handleSize: 'Size_24',
};

export default Slider;
