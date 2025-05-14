import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import React from "react";
import { Target } from "lucide-react";
import InputEcho from "../components/InputEcho";
import MedicinePopup from "../components/MedicinePopup";



describe("Validate the table headings", () => {
    test("Check Medicine name is present or not", () => {
        render(<App />)
        const medicineName = screen.getByText("Augmentin 625 Duo Tablet");
        expect(medicineName).toBeInTheDocument();
    })
    test("Check Medicine salt is present or not", () => {
        render(<App />)
        const medicineSalt = screen.getByText("Amoxycillin (500mg) + Clavulanic Acid (125mg)");
        expect(medicineSalt).toBeInTheDocument();
    })
    test("Check Stored At heading is present or not", () => {
        render(<App />)
        const storedAtHeading = screen.getByText("Stored At");
        expect(storedAtHeading).toBeInTheDocument();
    })
    test("Check Batch No. heading is present or not", () => {
        render(<App />)
        const batchNoHeading = screen.getByText("Batch No.");
        expect(batchNoHeading).toBeInTheDocument();
    })
    test("Check Mfg. Date heading is present or not", () => {
        render(<App />)
        const mfgDateHeading = screen.getByText("Mfg. Date");
        expect(mfgDateHeading).toBeInTheDocument();
    })
    test("Check Exp. Date heading is present or not", () => {
        render(<App />)
        const expDateHeading = screen.getByText("Exp. Date");
        expect(expDateHeading).toBeInTheDocument();
    })
    test("Check MRP heading is present or not", () => {
        render(<App />)
        const mrpHeading = screen.getByText("MRP (₹)");
        expect(mrpHeading).toBeInTheDocument();
    })
    test("Check Unit per Qty. heading is present or not", () => {
        render(<App />)
        const unitPerQtyHeading = screen.getByText("Unit Per Qty.");
        expect(unitPerQtyHeading).toBeInTheDocument();
    })
    test("Check Avl. Qty. heading is present or not", () => {
        render(<App />)
        const avlQtyHeading = screen.getByText("Avl. Qty.");
        expect(avlQtyHeading).toBeInTheDocument();
    })
    test("Check Qty. heading is present or not", () => {
        render(<App />)
        const qtyHeading = screen.getByText("Qty.");
        expect(qtyHeading).toBeInTheDocument();
    })
});

describe("Validate the Table data", () => {
    test("Check table body contains data", () => {
        render(<App />);
        const table = screen.getByRole("table");
        const tbody = within(table).getByTestId("table-body");
        const tdElements = within(tbody).getAllByRole("cell");
        expect(tdElements.length).toBeGreaterThan(0);
    })
    test("Check the Qty. input field present or not in table", () => {
        render(<App />);
        const table = screen.getByRole("table");
        const qtyInputbox = within(table).getAllByRole("spinbutton");
        expect(qtyInputbox.length).toBeGreaterThan(0);
    })
    test("Check the functionality of Qty. input box", () => {
        render(<App />)
        const table = screen.getByRole("table");
        const qtyInputbox = screen.getAllByRole("spinbutton");
        fireEvent.change(qtyInputbox[1], {target: {value: "123"}});
    })
})

describe("Validate the Add button", () => {
     test("Check that Add button is present or not", () => {
        render(<App />)
        const addBtn = screen.getByRole("button", {name: "+Add", hidden: true});
        expect(addBtn).toBeInTheDocument();
    })
    /* test("Check that the Add button is clickable or not", () => {
        render(<App />);
         const mockOnAdd = vi.fn(); // or jest.fn() if using Jest
        const mockOnClose = vi.fn();

        render(<App onAdd={mockOnAdd} onClose={mockOnClose} />);
        const addBtn = screen.getAllByRole("button", {name: "+Add", hidden: true});
        // expect(addBtn).toBeEnabled();
        fireEvent.click(addBtn[1]);
        expect(mockOnAdd).toHaveBeenCalled();
    }) */
})

test("Snapshot for the app component", () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
})