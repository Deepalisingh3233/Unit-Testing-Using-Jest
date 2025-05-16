import { render, screen } from "@testing-library/react"
import FindBy from "./FindBy"


test("Test element with FindBy",async () => {
    render(<FindBy/>)
    const element = await screen.findByText("Data Found",{},{timeout:4000});
    expect(element).toBeInTheDocument();
})