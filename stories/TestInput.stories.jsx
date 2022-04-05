import React from "react";
import { within, userEvent } from "@storybook/testing-library";
import TestInput from "./TestInput";

export default {
  title: "Test Input",
  component: TestInput,
};

const file = new File(["foo"], "bar.csv");

export const Primary = () => <TestInput />;
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await new Promise((r) => setTimeout(r, 2000));

  await userEvent.upload(canvas.getByTestId("my-input"), file);
  await new Promise((r) => setTimeout(r, 1000));
};
