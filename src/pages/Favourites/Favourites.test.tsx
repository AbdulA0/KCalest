import React from 'react';
import { findByTestId, render, wait } from '@testing-library/react';
import Favourites from './Favourites';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchItemList from '../../components/Search/SearchItemList';
import SearchItemModal from '../../components/SearchItemModal/SearchItemModal';
import { ISearchItem } from '../../models/SearchItems';

describe('favourities component',()=>{
    it("rendering favourities page",()=>{
        const{findByText} =render( <Router> <Favourites/> </Router> )
        findByText('Kcalest')

    })

    it('rendering  searchItemList in Favourities list',()=>{
        const   {findByTestId }=render( <Router>  <Favourites> <SearchItemList searchItems={null} itemClickedHandler={function (item: ISearchItem): void {
            throw new Error('Function not implemented.');
        } }/> </Favourites>   </Router>  )
      const childcomponent = findByTestId('searchitemlist')
        expect(childcomponent)
    })

    it('rendering  searchItemModal in Favourities list',()=>{
        const   {findByTestId }=render( <Router>  <Favourites> <SearchItemModal showModal={false} onCancel={function (id: string, isFavourite: boolean): void {
            throw new Error('Function not implemented.');
        } } model={{
        favourites:null,
        item:null
        }} isAuthenticated={false} coordinates={{
            lat: 0,
            lng: 0
        }}/> </Favourites>   </Router>  )
      const childcomponent = findByTestId('searchitemModal')
        expect(childcomponent)
    })
})