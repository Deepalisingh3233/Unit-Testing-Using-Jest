import { render, screen } from "@testing-library/react";
import GetByDisplayId from "./GetByDisplayId"


// test("Testing with display value", () => {
//     render(<GetByDisplayId />);
//     const input = screen.getByDisplayValue("Ritesh");
//     expect(input).toBeInTheDocument();
// })

test("Multiple input with display value", () => {
    render(<GetByDisplayId />);
    const input = screen.getAllByDisplayValue("Ritesh");
    expect(input[1]).toBeInTheDocument();
    for (let i = 0; i < i.length; i++) {
        expect(input[i]).toBeInTheDocument();    
    }
})


test("TestArea testing display value", () => {
    render(<GetByDisplayId />);
    const textarea = screen.getByDisplayValue("Ritesh Singh");
    expect(textarea).toBeInTheDocument();
})

test("Radio testing display value", () => {
    render(<GetByDisplayId />);
    const radio = screen.getByDisplayValue("Male");
    expect(radio).toBeInTheDocument();
})