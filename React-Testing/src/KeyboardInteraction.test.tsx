import { render, screen } from "@testing-library/react"
import KeyboardInteraction from "./KeyboardInteraction"
import userEvent from "@testing-library/user-event";


test("OnChange Event Testing", async () => {
    userEvent.setup();
    render(<KeyboardInteraction />);
    const ele = screen.getByRole("textbox");
    await userEvent.type(ele, "Deepali");
    expect(screen.getByText("Deepali")).toBeInTheDocument();
})