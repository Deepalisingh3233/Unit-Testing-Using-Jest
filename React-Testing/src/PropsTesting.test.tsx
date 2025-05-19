import { render, screen } from "@testing-library/react"
import PropsTesting from "./PropsTesting"
import User from "./User";


test("Props Testing", () => {
    const name = "Ritesh";
    render(<User name = {name} />);
    const user = screen.getByText(`User Name : ${name}`);
    expect(user).toBeInTheDocument();
})