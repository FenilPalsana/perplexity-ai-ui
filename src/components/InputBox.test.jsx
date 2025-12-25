import { render, screen } from "@testing-library/react";
import InputBox from "./InputBox";

test("renders input box", () => {
  render(<InputBox />);
  expect(screen.getByPlaceholderText(/ask anything/i)).toBeInTheDocument();
});
