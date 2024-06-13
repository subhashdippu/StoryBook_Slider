import React from 'react';
import Slider from './Slider';

export default {
    title: 'Example/Slider',
    component: Slider,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['Continuous', 'Discreet'],
        },
        subtype: {
            control: { type: 'radio' },
            options: ['Single', 'Range'],
        },
        steps: {
            control: { type: 'number', min: 1, max: 10 },
        },
        handleSize: {
            control: { type: 'radio' },
            options: ['Size_24', 'Size_32'],
        },
    },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'Continuous',
    subtype: 'Single',
    steps: 10,
    handleSize: 'Size_24',
};
