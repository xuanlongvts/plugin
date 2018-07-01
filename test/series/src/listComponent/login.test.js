import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import TestRenderer from 'react-test-renderer';

import Login from './login';

// https://hackernoon.com/implementing-basic-component-tests-using-jest-and-enzyme-d1d8788d627a

describe('Login component', () => {
    const wrapper = shallow(<Login />);
    it('should render without throw an error', () => {
        expect(
            shallow(<Login />)
                .find('form.login')
                .exists()
        ).toBe(true);
    });

    it('render email input', () => {
        expect(shallow(<Login />).find('#email').length).toBe(1);
    });

    it('render password input', () => {
        expect(shallow(<Login />).find('#password').length).toBe(1);
    });

    describe('Email input', () => {
        it('should respond to change event and change the state of the Login component', () => {
            const email = 'abc@gmail.com';
            wrapper.find('#email').simulate('change', {
                target: {
                    name: 'email',
                    value: email
                }
            });

            expect(wrapper.state('email')).toEqual(email);
        });
    });

    describe('Password input', () => {
        it('should respond to change event and change the state of the Login component', () => {
            const valuePass = 'cats';
            wrapper.find('#password').simulate('change', {
                target: {
                    name: 'password',
                    value: valuePass
                }
            });

            expect(wrapper.state('password')).toEqual(valuePass);
        });
    });

    it('render correctly', () => {
        const tree = TestRenderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
