import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '../components/Slider';

test('renders continuous single slider', () => {
    render(<Slider type="Continuous" subtype="Single" handleSize="Size_24" onChange={() => { }} />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
});

test('slider value changes on input', () => {
    const handleChange = jest.fn();
    render(<Slider type="Continuous" subtype="Single" handleSize="Size_24" onChange={handleChange} />);
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });
    expect(handleChange).toHaveBeenCalledWith(50);
});
