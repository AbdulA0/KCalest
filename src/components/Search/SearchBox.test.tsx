import React from 'react';
import {fireEvent, render, wait} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SearchBox from './SearchBox';
import SearchDisplay from '../Display/SearchDisplay/SearchDisplay';

describe('SearchBox component', () => {
  it('rendering without error', () => {
    const {findByText, getByRole} = render(
      <SearchBox
        getItemsHandler={function (event: any, calories: any): void {
          throw new Error('Function not implemented.');
        }}
        setFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        removeFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        errorMessage={''}
        filters={[]}
        getCoordinates={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    const searchButton = getByRole('button', {name: 'search'});
    fireEvent.click(searchButton);
  });

  it('rendering without error', () => {
    const {findByText, getByRole} = render(
      <SearchBox
        getItemsHandler={function (event: any, calories: any): void {
          throw new Error('Function not implemented.');
        }}
        setFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        removeFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        errorMessage={''}
        filters={[]}
        getCoordinates={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    const resturantButton = getByRole('button', {name: 'resturant'});
    fireEvent.click(resturantButton);
  });

  it('rendering without error', () => {
    const mockeco =jest.fn()
    const {findByText, getByRole} = render(
      <SearchBox
        getItemsHandler={function (event: any, calories: any): void {
          throw new Error('Function not implemented.');
        }}
        setFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        removeFilter={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        errorMessage={''}
        filters={[]}
        getCoordinates={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );

    const ecoButton = getByRole('button', {name: 'eco'});
    fireEvent.click(ecoButton);
    expect(mockeco)
  });

//   it('rendering searchDisplay inside searchBox',()=>{
//     const {findByTestId}= render(<SearchBox getItemsHandler={function (event: any, calories: any): void {
//         throw new Error('Function not implemented.');
//     } } setFilter={function (id: string): void {
//         throw new Error('Function not implemented.');
//     } } removeFilter={function (id: string): void {
//         throw new Error('Function not implemented.');
//     } } errorMessage={''} filters={[]} getCoordinates={function (): void {
//         throw new Error('Function not implemented.');
//     } }> <SearchDisplay getItemsHandler={function (event: any, calories: any): void {
//             throw new Error('Function not implemented.');
//         } } setFilter={function (id: string): void {
//             throw new Error('Function not implemented.');
//         } } removeFilter={function (id: string): void {
//             throw new Error('Function not implemented.');
//         } } errorMessage={''} filters={[]} getCoordinates={function (): void {
//             throw new Error('Function not implemented.');
//         } } onSegmentChange={function (value: string | undefined): void {
//             throw new Error('Function not implemented.');
//         } } locationSelector={''} getCalories={function (value: string | null | undefined): void {
//             throw new Error('Function not implemented.');
//         } } calories={''}/>  </SearchBox>)

//      const childcomponent = findByTestId('searchDisplay')
// expect(childcomponent)
//   })

});
