import { StoryObj, Meta } from "@storybook/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const meta: Meta = {
  component: Navbar,
  title: "Navbar",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Light: Story = {
  args: {
    variant: "Light",
  },
};
