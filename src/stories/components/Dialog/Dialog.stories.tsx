import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Dialog from './Dialog';


const meta:Meta<typeof Dialog>={
    title:'Dialog',
    component:Dialog,
    tags:['autodocs']
}
export default meta

type Story= StoryObj<typeof meta>;

export const Default:Story={
    args:{
        variant:'default',
        headerText:'Dialog',
        primaryButtonLabel:'Confirm',
        secondaryButtonLabel:'Cancel',
        dialogContent:"This is Dialog Content"
    }
}