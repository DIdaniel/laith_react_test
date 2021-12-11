import React from "react";
import Counter from "./Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("id=header인 태그가 올바른 문자로 렌더링 된다", () => {
  // const component = render(<Counter />);
  // const headerEl = component.getByTestId("header");
  // Distructuring을 통해서 조금 더 심플하게 나타낼 수 있다.
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter가 최초 숫자 0으로 시작된다", () => {
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input의 최초 숫자는 1이다", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("+인 add button이 렌더링 된다", () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("-인 subtract button이 렌더링 된다", () => {
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
});

test("state 변경 되는 input이 제대로 작동한다", () => {
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, { target: { value: "5" } });

  expect(inputEl.value).toBe("5");
});

test("+ 누르면 1 증가", () => {
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1");
});

test("- 누르면 1 감소", () => {
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-1");
});

test("input을 바꾸고, + 버튼 누르면 그에 맞게 변화한다", () => {
  const addBtn = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, { target: { value: "5" } });

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("5");
});

test("input을 바꾸고, - 버튼 누르면 그에 맞게 변화한다", () => {
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, { target: { value: "5" } });

  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("-5");
});

test("올바른 카운터 넘버로 더하고 빼기", () => {
  const addBtn = getByTestId("add-btn");
  const subtractBtn = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, { target: { value: "10" } });

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("20");

  fireEvent.change(inputEl, { target: { value: "5" } });

  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.textContent).toBe("15");
});

test("counter가 올바른 className을 가지고 있는가?", () => {
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtn = getByTestId("add-btn");
  const subtractBtn = getByTestId("subtract-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, { target: { value: "50" } });

  fireEvent.click(addBtn);
  expect(counterEl.className).toBe("");

  fireEvent.click(addBtn);
  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtn);
  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);

  expect(counterEl.className).toBe("red");
});
