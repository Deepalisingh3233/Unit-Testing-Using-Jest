import { render, screen } from "@testing-library/react"
import TextMatchUsingFunction from "./TextMatchUsingFunction"


test("Test match with function", () => {
    render(<TextMatchUsingFunction />);
    // const div = screen.getByText((content, element) => content.startsWith("Hello"));
    // const div = screen.getByText((content, element) => content.endsWith("World"));
    // const div = screen.getByText((content, element) => content.endsWith("ld"));
    // const div = screen.getByText((content, element) => content.includes("ld"));
    /* const div = screen.getByText((content, element) => {
        return content.includes("ll")
    }); */

    /* const div = screen.getAllByText((content, element) => {
        return true;
    }) */

    const div = screen.getByText((content, element) => {
        return content.length==11;
    })
    expect(div).toBeInTheDocument();
})