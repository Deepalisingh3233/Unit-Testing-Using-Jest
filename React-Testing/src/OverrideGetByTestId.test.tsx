import { render, screen, configure } from "@testing-library/react"
import OverrideGetByTestId from "./OverrideGetByTestId"

configure({testIdAttribute: "element-id"})

test("test div with data test id", () => {
    render(<OverrideGetByTestId />);
    const divElement = screen.getByTestId("test-div");
    expect(divElement).toBeInTheDocument();
})