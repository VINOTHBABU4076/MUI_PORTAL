import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios'; 
import Create from './Create';
import { useNavigate } from 'react-router-dom'; 

jest.mock('axios');

describe('Create Component', () => {
  test('renders form and handles submission', async () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByLabelText, getByText } = render(<Create />);

    const firstNameInput = getByLabelText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    const lastNameInput = getByLabelText('Last Name');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    const agreeCheckbox = getByLabelText('Agree terms and conditions');
    fireEvent.click(agreeCheckbox);

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        expect.any(String),
        {
          firstName: 'vinoth',
          lastName: 'babu',
          checked: true,
        }
      );

      expect(navigateMock).toHaveBeenCalledWith('/read');
    });
  });
});
