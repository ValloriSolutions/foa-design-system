import React from "react";
import { Meta, Story } from "@storybook/react";
import * as Icons from "../src/icons";
import { IconProps } from "../src/icons/types";

export default {
  title: "Components/Icons",
} as Meta;

export const Mail: Story<IconProps> = () => <Icons.IconMail />;
export const Bell: Story<IconProps> = () => <Icons.IconBell />;
export const Credit: Story<IconProps> = () => <Icons.IconCredit />;
export const DashBoard: Story<IconProps> = () => <Icons.IconDashboard />;
export const Edit: Story<IconProps> = () => <Icons.IconEdit />;
export const Filter: Story<IconProps> = () => <Icons.IconFilter />;
export const Print: Story<IconProps> = () => <Icons.IconPrint />;
export const Search: Story<IconProps> = () => <Icons.IconSearch />;
export const Ticket: Story<IconProps> = () => <Icons.IconTicket />;

