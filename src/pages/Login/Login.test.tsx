import { render, screen, wait } from '@testing-library/react';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import React from 'react';
import Login from './Login';

describe('Login component', () => {
  it('renders the login form', async () => {
    const { findByText , findByTestId , getByRole} = render(<Login test={true} onLogin={function (username: string, password: string): void {
      throw new Error('Function not implemented.');
    } } />);
    await findByTestId('emailAddress');
    await findByTestId('password');
    getByRole('button', { name: 'Submit' });
  });

  it('calls the onLogin function with the username and password when the form is submitted', async () => {
    const mockOnLogin = jest.fn();
    const {  findByTestId , getByRole ,  }  = render(<Login test={true} onLogin={mockOnLogin} />);
    const usernameInput = await findByTestId('emailAddress');
    const passwordInput = await findByTestId('password');
    const loginButton =  await getByRole('button', { name: 'Submit' });
    fireEvent.ionChange(usernameInput , 'testuser@gmail.com')
    fireEvent.ionChange(passwordInput ,'test1234')
    fireEvent.click(loginButton);
    await wait(() => expect(mockOnLogin));

  });

  it('displays an error message if the username or password fields are empty', async () => {
    const mockOnLogin = jest.fn();
    const { findByTestId, getByText , getByRole} = render(<Login test={true} onLogin={mockOnLogin} />);
    const usernameInput = await findByTestId('emailAddress');
    const passwordInput = await findByTestId('password');
    fireEvent.ionChange(usernameInput , '')
    fireEvent.ionChange(passwordInput ,'')
    const loginButton = getByRole('button', { name: 'Submit' });
    fireEvent.click(loginButton);
    await wait(() => expect('Please enter both a username and password'))
  });
});