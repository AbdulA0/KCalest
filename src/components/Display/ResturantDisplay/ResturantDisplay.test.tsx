import React from "react";
import ResturantDisplay from "./ResturantDisplay";
import { render, wait } from '@testing-library/react';


describe('ResturantDisplay component ',()=>{
    it('rendering ResturantDisplay ',()=>{
        const{findByTestId,findByText,getByRole} =render(<ResturantDisplay/>)
        findByTestId('resturantdisplay')
    })
})