import { logRoles, render, screen } from "@testing-library/react"
import APICall from "./APICall"


test("test heading", () => {
    render(<APICall />);
    const ele = screen.getByRole("heading");
    expect(ele).toBeInTheDocument();
})

// test("Render test for mock API's", async () => {
//      const {container, debug} = render(<APICall />);
//      const ele = await screen.findAllByRole("listitem");
//      expect(ele).toHaveLength(4);
//     logRoles(container);
// })