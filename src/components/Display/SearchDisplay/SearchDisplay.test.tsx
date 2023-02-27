import React from "react";
import { findByTestId, render, wait } from '@testing-library/react';
import SearchDisplay from "./SearchDisplay";
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

describe('SearchDisplay component ',()=>{
    it('rendering searchDisplay component',()=>{
        const {findByTestId,findByText,getByRole} =render(<SearchDisplay getItemsHandler={function (event: any, calories: any): void {
            throw new Error("Function not implemented.");
        } } setFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } removeFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } errorMessage={""} filters={[]} getCoordinates={function (): void {
            throw new Error("Function not implemented.");
        } } onSegmentChange={function (value: string | undefined): void {
            throw new Error("Function not implemented.");
        } } locationSelector={""} getCalories={function (value: string | null | undefined): void {
            throw new Error("Function not implemented.");
        } } calories={""} />)
 findByTestId('display')
        // const loginButton =   getByRole('button', { name: 'search' });
    })

    it('rendering button in screenDisplay',()=>{
        const mockOnSearch = jest.fn();
        const {findByTestId,findByText,getByRole} =render(<SearchDisplay getItemsHandler={function (event: any, calories: any): void {
;
        } } setFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } removeFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } errorMessage={""} filters={[]} getCoordinates={function (): void {
            throw new Error("Function not implemented.");
        } } onSegmentChange={function (value: string | undefined): void {
            throw new Error("Function not implemented.");
        } } locationSelector={""} getCalories={function (value: string | null | undefined): void {
            throw new Error("Function not implemented.");
        } } calories={""} />)
 
        const searchButton = getByRole('button', { name: 'Search' });
        fireEvent.click(searchButton);
         wait(() => expect(mockOnSearch));
    })


    it('rendering button in searchDisplay component', async ()=>{
        // const mockbtton = jest.fn();
        const{findByTestId,getByRole }=render(<SearchDisplay getItemsHandler={function (event: any, calories: any): void {
        
        } } setFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } removeFilter={function (id: string): void {
            throw new Error("Function not implemented.");
        } } errorMessage={""} filters={[]} getCoordinates={function (): void {
            throw new Error("Function not implemented.");
        } } onSegmentChange={function (value: string | undefined): void {
            throw new Error("Function not implemented.");
        } } locationSelector={""} getCalories={function (value: string | null | undefined): void {
            
        } } calories={""}/>)

        const userbtn = await findByTestId('bttn');
        fireEvent.ionChange(userbtn,'')
        // expect(mockbtton)

     
    })
  
})