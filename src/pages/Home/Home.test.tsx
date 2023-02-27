import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import Home from './Home';
import SearchDisplay from '../../components/Display/SearchDisplay/SearchDisplay';
import SearchBox from '../../components/Search/SearchBox';
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

function mockFetch(data: any) {
    return jest.spyOn(window, 'fetch').mockResolvedValue(new Response(JSON.stringify(data)));
  }
  
  beforeEach(() => mockFetch([]));


test('page should have a title of Kcalest', async () => {
  const { findByText } = render(<Home />);
  await findByText('Kcalest');
});

// test('render searchItem list in home page',()=>{
//   const {findByTestId}= render(<Home> <SearchBox getItemsHandler={function (event: any, calories: any): void {
//     throw new Error('Function not implemented.');
//   } } setFilter={function (id: string): void {
//     throw new Error('Function not implemented.');
//   } } removeFilter={function (id: string): void {
//     throw new Error('Function not implemented.');
//   } } errorMessage={''} filters={[]} getCoordinates={function (): void {
//     throw new Error('Function not implemented.');
//   } }/> </Home>)

//    const childcomponent =  findByTestId('searchBox')
//   expect(childcomponent)
// })

