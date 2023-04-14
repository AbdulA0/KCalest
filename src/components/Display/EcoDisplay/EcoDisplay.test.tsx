import React from "react";
import EcoDisplay from "./EcoDisplay";
import { render, wait } from '@testing-library/react';

describe('ResturantDisplay component ',()=>{
    it('rendering ResturantDisplay ',()=>{
        const{findByTestId,findByText,getByRole} =render(<EcoDisplay/>)
        findByTestId('EcoDisplay')
    })
})