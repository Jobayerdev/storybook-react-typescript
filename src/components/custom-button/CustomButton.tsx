import React from "react"
import { customButtonProps } from "./custom-button.interface"
import "./custom-button.style.css"

const CustomButton: React.FC<customButtonProps> = ({
	materialBtn,
	danger,
	invert,
	children,
	type,
	sharpBtn,
	iconBtn,
	active,
	noShadow,
	successColor,
	...otherProps
}) => {
	return (
		<button
			type={type}
			className={`custom-button
			${invert ? "custom-button-invert" : ""} 
			${materialBtn ? "custom-material-button" : ""} 
			${danger ? "custom-button-danger" : ""} 
			${sharpBtn ? "custom-button-sharpe" : ""}
			${active ? "custom-button-active" : ""}
			${successColor ? "custom-button-success" : ""}
			${noShadow ? "custom-button-no-shadow" : ""}
			${iconBtn ? "custom-button-with-icon" : ""}`}
			{...otherProps}>
			{children}
		</button>
	)
}

export default CustomButton
