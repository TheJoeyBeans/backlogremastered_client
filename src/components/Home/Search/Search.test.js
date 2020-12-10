import React from 'react';
import {render, fireEvent, cleanup, waitFor} from '@testing-library/react';
import Search from './Search';

afterEach(cleanup);

//Tests rendering of the search component
it("renders correctly", () =>{
    const {queryByTestId, queryByLabelText} = render(<Search/>)

    expect(queryByTestId("autoComplete")).toBeTruthy();
    expect(queryByLabelText("Search")).toBeTruthy();
});

//Tests onChange for text input
describe("Query value", () =>{
    it("updates on change", () =>{
        const {queryByLabelText} = render(<Search/>);
        const searchInput = queryByLabelText("Search");

        fireEvent.change(searchInput, {target: {value: "test"}});
        expect(searchInput.value).toBe("test");
    })
});