import { render } from "@testing-library/react"
import CustomQuery from "./CustomQuery"

test("Test Case with Custom Query", () => {
    render(<CustomQuery />);
    const element = document.querySelector("#test-id");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Custom Query");
    expect(element).toHaveAttribute("id");
})