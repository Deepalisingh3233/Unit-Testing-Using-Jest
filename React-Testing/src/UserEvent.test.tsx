import { render, screen } from "@testing-library/react"
import UserEvent from "./UserEvent"
import userEvent from "@testing-library/user-event";


test("Click event with User Event", async () => {
    userEvent.setup();
    render(<UserEvent />);
    const btn = screen.getByText("Click Me");
    await userEvent.click(btn);
    expect(screen.getByText("Hello")).toBeInTheDocument();
})