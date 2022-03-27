import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);

  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("plus-button");
  expect(minusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter change to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter change to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -, + button from being pressed with on/off button is clikced", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off");

  const minusButtonElement = screen.getByTestId("minus-button");
  const plusButtonElement = screen.getByTestId("plus-button");

  fireEvent.click(onOffButtonElement);

  expect(minusButtonElement).toBeDisabled();
  expect(plusButtonElement).toBeDisabled();

  fireEvent.click(onOffButtonElement);
  expect(minusButtonElement).toBeEnabled();
  expect(plusButtonElement).toBeEnabled();
});
