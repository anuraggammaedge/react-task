import { render, screen, fireEvent } from "@testing-library/react";

import FormTesting from "./index";

test("Form testing", () => {
  render(<FormTesting />);

  const fullName = screen.getByPlaceholderText("Full Name");

  const email = screen.getByPlaceholderText("Email");

  const password = screen.getByPlaceholderText("Password");

  fireEvent.change(fullName, { target: { value: "Anurag Dubey" } });
  expect(fullName.value).toBe("Anurag Dubey");

  fireEvent.change(email, { target: { value: "anuragd2169@gmail.com" } });
  expect(email.value).toBe("anuragd2169@gmail.com");

  fireEvent.change(password, { target: { value: "Dubey12345" } });
  expect(password.value).toBe("Dubey12345");

  expect(screen.getByText("Create account")).toBeInTheDocument();
});
