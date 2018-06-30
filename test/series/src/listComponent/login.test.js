import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import Login from './login';

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
            wrapper.find('#email').simulate('change', {
                target: {
                    name: 'email',
                    value: 'abc@gmail.com'
                }
            });

            expect(wrapper.state('email')).toEqual('abc@gmail.com');
        });
    });

    describe('Password input', () => {
        it('should respond to change event and change the state of the Login component', () => {
            wrapper.find('#password').simulate('change', {
                target: {
                    name: 'password',
                    value: 'cats'
                }
            });

            expect(wrapper.state('password')).toEqual('cats');
        });
    });
});
