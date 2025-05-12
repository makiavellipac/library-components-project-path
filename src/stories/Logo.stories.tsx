import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../components/Logo';

const meta: Meta <typeof Logo> = {
    title:"Components/Logo",
    tags:["autodocs"],
    parameters:{
        layout:"centered"
    },
    component:Logo,
    argTypes:{
        children:{
            description:"String contenido de nuestro Logo"
        },
        color:{
            type:"string",
            control:"color",
            description:"Variantes de color en el logo"
        },
        size:{
            type:"string",
            options:['full' , 'medium' , 'short'],
            control:"inline-radio",
            description:"Variantes del tamaño del logo"
        }
    }
}

export default meta;
type Story = StoryObj<typeof Logo>

export const Default: Story = {
    args:{
        children:"ProjectPath"
    }
}

export const CustomColor: Story = {
    args:{
        children:"CustomColor",
        color:"#1AD698"
    }
}

export const Full: Story = {
    args:{
        children:"Full",
        color:"#1AD698",
        size:"full"
    }
}

export const Medium: Story = {
    args:{
        children:"Medium",
        color:"#1AD698",
        size:"medium"
    }
}

export const Short: Story = {
    args:{
        children:"Short",
        color:"#1AD698",
        size:"short"
    }
}