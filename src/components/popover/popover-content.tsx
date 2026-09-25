import React, { useEffect, useRef, useState } from "react";
import { PopoverPadding, PopoverPlacement } from "./popover";
import "./popover.css";

export type PopoverContentProps = {
    content: React.ReactNode;
    childRef: React.RefObject<HTMLDivElement | null>;
    popoverPadding: PopoverPadding;
    placement?: PopoverPlacement | "defaultPlacement";
};

export const PopoverContent: React.FunctionComponent<PopoverContentProps> = (props) => {
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const updatePosition = () => {
        if (popoverRef.current && props.childRef.current) {

            const anchorRect = props.childRef.current.getBoundingClientRect();
            const popoverRect = popoverRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let left = 0;
            let top = 0;

            switch (props.placement) {
                case "top": {
                    left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2) + props.popoverPadding.left;
                    top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    if (top < 0){
                        top = anchorRect.top + anchorRect.height
                    }
                    break;
                }
                case "bottom": {
                    left = anchorRect.left + (anchorRect.width / 2) - (popoverRect.width / 2) + props.popoverPadding.left;
                    top = anchorRect.top + anchorRect.height - props.popoverPadding.top;

                    // Ensure the popover does not go out of the viewport horizontally
                    // if (left + popoverRect.width > viewportWidth) {
                    //     left = viewportWidth - popoverRect.width - props.popoverPadding.right;
                    // }
                    // if (left < 0) left = props.popoverPadding.left;

                    // Ensure the popover does not go out of the viewport vertically
                    if (top + popoverRect.height > viewportHeight) {
                        top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    }
                    break;
                }
                case "right": {
                    left = anchorRect.left + anchorRect.width + props.popoverPadding.right;
                    top = anchorRect.top + (anchorRect.height/2) - (popoverRect.height/2) - props.popoverPadding.top;   

                    // Ensure the popover does not go out of the viewport horizontally
                    // if (left + popoverRect.width > viewportWidth) {
                    //     left = viewportWidth - popoverRect.width - props.popoverPadding.right;
                    // }
                    // if (left < 0) left = props.popoverPadding.left;

                    // Ensure the popover does not go out of the viewport vertically
                    if (left + popoverRect.width > viewportHeight) {
                        left = anchorRect.left - popoverRect.width - props.popoverPadding.top;
                    }
                    break;
                }
                case "left": {
                    left = anchorRect.left - popoverRect.width + props.popoverPadding.right;
                    top = anchorRect.top + (anchorRect.height/2) - (popoverRect.height/2) - props.popoverPadding.top;   

                    // Ensure the popover does not go out of the viewport horizontally
                    // if (left + popoverRect.width > viewportWidth) {
                    //     left = viewportWidth - popoverRect.width - props.popoverPadding.right;
                    // }
                    // if (left < 0) left = props.popoverPadding.left;

                    // Ensure the popover does not go out of the viewport vertically
                    if (left < 0) {
                        left = anchorRect.left + anchorRect.width - props.popoverPadding.top;
                    }
                    break;
                }
                case "rightBottomCorner": {
                    left = anchorRect.left + anchorRect.width + props.popoverPadding.right;
                    top = anchorRect.top + anchorRect.height + props.popoverPadding.bottom;
                    if (left + popoverRect.width > viewportWidth) {
                        left = anchorRect.left - popoverRect.width - props.popoverPadding.left;
                    }
                    if (top + popoverRect.height > viewportHeight) {
                        top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    }
                    if (left < 0) left = anchorRect.right;
                    if (top < 0) top = anchorRect.bottom + props.popoverPadding.bottom;
                    break;
                }
                case "leftBottomCorner": {
                    left = anchorRect.left - popoverRect.width + props.popoverPadding.right;
                    top = anchorRect.top + anchorRect.height + props.popoverPadding.bottom;

                    if (left + popoverRect.width > viewportWidth) {
                        left = anchorRect.left - popoverRect.width - props.popoverPadding.left;
                    }
                    if (top + popoverRect.height > viewportHeight) {
                        top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    }
                    if (left < 0) left = anchorRect.right;
                    if (top < 0) top = anchorRect.bottom + props.popoverPadding.bottom;
                    break;
                }
                case "rightTopCorner": {
                    left = anchorRect.left + anchorRect.width + props.popoverPadding.right;
                    top = anchorRect.top - popoverRect.height + props.popoverPadding.bottom;

                    if (left + popoverRect.width > viewportWidth) {
                        left = anchorRect.left - popoverRect.width - props.popoverPadding.left;
                    }
                    if (top + popoverRect.height > viewportHeight) {
                        top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    }
                    if (left < 0) left = anchorRect.right;
                    if (top < 0) top = anchorRect.bottom + props.popoverPadding.bottom;
                    break;
                }
                case "leftTopCorner": {
                    left = anchorRect.left - popoverRect.width + props.popoverPadding.right;
                    top = anchorRect.top - popoverRect.height + props.popoverPadding.bottom;

                    if (left + popoverRect.width > viewportWidth) {
                        left = anchorRect.left - popoverRect.width - props.popoverPadding.left;
                    }
                    if (top + popoverRect.height > viewportHeight) {
                        top = anchorRect.top - popoverRect.height - props.popoverPadding.top;
                    }
                    if (left < 0) left = anchorRect.right;
                    if (top < 0) top = anchorRect.bottom + props.popoverPadding.bottom;
                    break;
                }
                case "defaultPlacement": {
                    left = 0;
                    top = 0;
                    break;
                }
            }
            setPosition({ top, left });
        }
    };

    useEffect(() => {
        updatePosition();

        const handleScroll = () => {
            updatePosition();
        };

        const handleResize = () => {
            updatePosition();
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll, true);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.addEventListener("scroll", handleScroll, true);
        };
    }, []);

    return (
        <div
            className={`smart-popover ${position ? "" : "smart-popover-hidden"}`}
            ref={popoverRef}
            style={{ top: position?.top || 0, left: position?.left || 0 }}
        >
            <div className="smart-popover-inner">
                <div className="smart-popover-inner-content">{props.content}</div>
            </div>
        </div>
    );
};
