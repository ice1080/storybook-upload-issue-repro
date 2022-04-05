import React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Other } from "./Other";

export default {
  title: "Other Story",
  component: Other,
};

export const Primary = () => <Other />;
