import { act } from "react-dom/test-utils";
import {
  findAllByTitle,
  findByDisplayValue,
  render,
  screen,
  wait,
} from "@testing-library/react";
import { ionFireEvent as fireEvent } from "@ionic/react-test-utils";
import React from "react";
import Register from "./Register";
import userEvent from "@testing-library/user-event";


describe("Register component", () => {
  it("renders the Register form", async () => {
    const { findByText, findByTestId, getByRole } = render(<Register test={true} />);
    await findByTestId("emailAddress");
    await findByTestId("password");
    getByRole("button", { name: "Create Account" });
  });

  it("render register form", async () => {
    const mockOnRegister = jest.fn();
    const { findByText, findByTestId, getByRole } = render(<Register test={true}/>);

    const usernameInput = await findByTestId("emailAddress");
    const passwordInput = await findByTestId("password");

      const CreateButton = await getByRole("button", { name: "Create Account"});

      fireEvent.ionChange(usernameInput, "testuser@gmail.com");

      fireEvent.ionChange(passwordInput, "test1234");

      fireEvent.click(CreateButton);
    

  await wait(() => expect(mockOnRegister));
  });

  it('displays an error message if the username or password fields are empty', async () => {
    const mockOnLogin = jest.fn().mockRejectedValue(new Error('Invalid username or password.'));
    const { findByTestId, getByText , getByRole} = render(<Register test={true}  />);
    const usernameInput = await findByTestId('emailAddress');
    const passwordInput = await findByTestId('password');
    fireEvent.ionChange(usernameInput , '')
    fireEvent.ionChange(passwordInput ,'')
    const CreateButton = getByRole('button', { name: 'Create Account' });
    fireEvent.click(CreateButton);
    await wait(() => expect('Please enter both a username and password'))
  });


});
