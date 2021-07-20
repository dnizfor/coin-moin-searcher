import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe(`testler`, ()=>{

    let searcher,title,values ;


    

    beforeEach(()=>{
        
        render(<App />);

   
        searcher = screen.getByLabelText("Search Coin:")
        title = screen.getByText("Coin Moin Searcher")
        values = screen.getBy



    })

    test('are u here ?  test', () => {
  
        expect(searcher).toBeInTheDocument();
        expect(title).toBeInTheDocument();
      });

      test('can u give me values if ı give input  ? test', () => {
  
        userEvent.type(input,"bitcoin");
        expect(screen.getAllByText("bitcoin").toBeInTheDocument)
      });


    
      






})

