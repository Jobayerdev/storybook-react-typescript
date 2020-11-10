import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import CustomButton from "./CustomButton"
import { customButtonProps } from "./custom-button.interface"

export default {
	title: "Component/Button",
	component: CustomButton,
} as Meta

const Template: Story<customButtonProps> = (args: any) => (
	<CustomButton {...args} />
)

export const PrimaryA = Template.bind({})
PrimaryA.args = {
	children: "Primary args",
}
