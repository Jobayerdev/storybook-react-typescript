import { HTMLAttributes, ReactNode } from "react"

export interface customButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	materialBtn?: boolean
	danger?: boolean
	invert?: boolean
	sharpBtn?: boolean
	iconBtn?: boolean
	type?: any
	active?: boolean
	successColor?: boolean
	noShadow?: boolean
}
