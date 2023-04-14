import React from "react";
import { fireEvent, render, wait } from '@testing-library/react';
import SearchItemModal from "./SearchItemModal";

describe('rendering searchitemModal component',()=>{
   
    it('rendering close button of searchitemModal', async ()=>{
        const mockOnClose = jest.fn();
        const{findByTestId,getByRole,findByText}=render(<SearchItemModal showModal={false} onCancel={function (id: string, isFavourite: boolean): void {
            throw new Error("Function not implemented.");
        } } model={{
            favourites : null,
            item : null
        }} isAuthenticated={false} coordinates={{
            lat: 0,
            lng: 0
        }}/>)
        const closebtn =findByTestId('close')
        //  const closeButton = await getByRole('button');
        // fireEvent.click(closeButton);
        expect(closebtn)

        
    })
})

       