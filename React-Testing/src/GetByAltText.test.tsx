import { render, screen } from "@testing-library/react"
import GetByAltText from "./GetByAltText"


// test("test image element with Alt text", () => {
//     render(<GetByAltText />)
//     const img = screen.getByAltText("Dummy Image");
//     expect(img).toBeInTheDocument();
// })

test("test image element with Alt text", () => {
    render(<GetByAltText />)
    const img = screen.getAllByAltText("Dummy Image");
    for (let i = 0; i < img.length; i++) {
     expect(img[i]).toBeInTheDocument();   
    }
})