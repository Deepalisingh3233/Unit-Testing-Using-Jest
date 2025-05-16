import { render, screen } from "@testing-library/react"
import QueryBy from "./QueryBy"


test("Query By test Case", () => {
    render(<QueryBy />);
    // const dv = screen.getByText("Login");
    const dv = screen.queryByText("Login");
    expect(dv).not.toBeInTheDocument();
})