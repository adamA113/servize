import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Nav-bar';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });
it('should render correctly with no props', () => {
    const component = shallow(<Navbar />);

    expect(component).toMatchSnapshot();
});
// it('should render banner text correctly with given strings', () => {
//     const strings = ['one', 'two'];
//     const component = shallow(<Navbar list={strings} />);
//     expect(component).toMatchSnapshot();
// });