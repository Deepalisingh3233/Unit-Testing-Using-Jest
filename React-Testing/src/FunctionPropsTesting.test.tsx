import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FunctionPropsTesting from "./FunctionPropsTesting";


test("Functional Props Testing", async () => {
    const testFunction = vitest.fn();
    userEvent.setup();
    render(<FunctionPropsTesting testFunction= {testFunction} />);
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();
})