import { render, screen, within } from "@testing-library/react"
import QueryinWithinElement from "./QueryingWithinElement"


test("Test with within function", () => {
    render(<QueryinWithinElement />);
    let ele = screen.getByText("Hello World");
    let subEle = within(ele).getByText("Hi")
    let subEle2 = within(ele).getByText("Hello")
    let subEle3 = within(ele).getByText("Hey")
    expect(ele).toBeInTheDocument();
    expect(subEle).toBeInTheDocument();
    expect(subEle2).toBeInTheDocument();
    expect(subEle3).toBeInTheDocument();
})