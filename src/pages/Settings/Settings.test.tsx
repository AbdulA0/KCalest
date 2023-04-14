import React from 'react';
import { render, wait } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import Settings from './Settings';
import { shallow } from 'enzyme';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({ push: jest.fn() })
}));


describe('Setting component ', ()=>{
    it('rendering Setting page', ()=>{
        const{findByText} =render(<Settings/>)
        findByText('Settings')
    })

    test('logoutHandler', async()=>{
        const mocklogout = jest.fn();
        // const val =shallow(<Settings/>)
        // const instance = val.instance();
        // instance.logoutHandler()

     const{findByText,getByRole,} =render(<Settings />)
      const logoutbutton =  getByRole('button', { name: 'Logout' });
      fireEvent.click(logoutbutton)
    //   await wait(() => expect(mocklogout) );
     })
} )
// ,{history:{push:('./home')}}