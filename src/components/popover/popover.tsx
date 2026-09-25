import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { PopoverContent } from "./popover-content";

export type PopoverPadding = {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export type PopoverPlacement =
	| "top"
	| "bottom"
	| "left"
	| "right"
	| "rightBottomCorner"
	| "leftBottomCorner"
	| "rightTopCorner"
	| "leftTopCorner";

export type PopoverProps = {
	open: boolean;
	children: React.ReactNode;
	content: React.ReactNode;
	popoverPadding?: PopoverPadding;
	placement?: PopoverPlacement | null;
};

export const Popover: React.FunctionComponent<PopoverProps> = (props) => {
	const childRef = useRef<HTMLDivElement | null>(null);
	const defaultPadding: PopoverPadding = { top: 0, right: 0, bottom: 0, left: 0 };
	const popoverPadding = props.popoverPadding || defaultPadding;
	const defaultPlacement = "defaultPlacement";

	return (
		<>
			{React.cloneElement(props.children as React.ReactElement<any>, { ref: childRef })}
			{props.open &&
				ReactDOM.createPortal(
					<PopoverContent content={props.content} childRef={childRef} popoverPadding={popoverPadding} placement={props.placement ? props.placement : defaultPlacement} />,
					document.body
				)}
		</>
	);
};
