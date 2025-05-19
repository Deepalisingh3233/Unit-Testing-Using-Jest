import { logRoles, prettyDOM, render, screen } from "@testing-library/react"
import Debugging from "./Debugging"


test("Testing Component", () => {
    const {container, debug} =  render(<Debugging />);
    // const ele = screen.getByText("Heading ");
    // expect(ele).toBeInTheDocument();
    // console.log(container);
    // console.log(prettyDOM(container));
    // debug();
    logRoles(container);
})