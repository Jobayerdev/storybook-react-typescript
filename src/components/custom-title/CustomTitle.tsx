import React, { ReactNode } from "react"

interface Props {
	children: ReactNode
	cutoff?: string
	icon?: boolean
	heroTitle?: boolean
	iconVariant?: string
	color?: string
}

const CustomTitle: React.FC<Props> = ({
	iconVariant,
	icon,
	cutoff,
	children,
	color,
	heroTitle,
}) => {
	return (
		<div
			className={`custom-title 
			${cutoff ? cutoff : ""} 
			${heroTitle ? "hero-title" : ""} 
			${icon ? "icon" : ""} 
			${color ? color : ""} 
			${iconVariant ? "icon-style" + iconVariant : ""}`}>
			{children}
		</div>
	)
}

export default CustomTitle
