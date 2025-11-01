import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";
import React from "react";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags:['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Red: Story = {
    args: {
        variant:'red'
    },
  };

  export const yellow: Story = {
    args: {
        variant:'yellow'
    },
  };

  export const Grouped:Story={
    render:()=><div>
        <Light variant="red"></Light>
        <Light variant="yellow"/>
        <Light variant="green"/>
    </div>
  }