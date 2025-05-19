import { act, render, screen } from "@testing-library/react"
import ActFunction from "./ActFunction"
import userEvent from "@testing-library/user-event";


test("Act Function", async () => {
    userEvent.setup();
    render(<ActFunction />);
    const input = screen.getByRole("textbox");
    await act(async () => { 
        await userEvent.type(input, "Ritesh");
    })
    // await userEvent.type(input, "Ritesh");
    expect(screen.getByText("Ritesh")).toBeInTheDocument();
})