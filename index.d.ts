// Type definitions for react-desktop
// Project: https://react-desktop.js.org
// Definitions by: Eric D Hiller <http://www.hiller.pro>
// Definitions: https://github.com/erichiller/typings-react-desktop


declare module "react-desktop-props" {
	
	import * as React from 'react';

	interface __TextProps extends __AlignedProps {
		hidden?: boolean;
		height?: number;

	}

	interface __BasicProps {
		color?: string;
		theme?: string;
	//	handleChange(event: any): void;
	}

	interface __AlignedProps extends __BasicProps {
		background?: string | boolean;
		verticalAlignment?: "top" | "center" | "bottom";
		padding?: string;
		margin?: string;
		horizontalAlignment?: "left" | "center" | "right";
	}

	type __ElementsType = string | JSX.Element | string[] | JSX.Element[];

	/** START file: navPane/windows/item/item.js */
	interface __NavPaneItemState {
		prevTitle: __ElementsType;
	}
	interface __NavPaneItemProps extends __AlignedProps {
		title?: __ElementsType
		icon?: __ElementsType
		push?: boolean;
		onSelect?: React.EventHandler<any>;
		selected?: boolean;
		paneTheme?: string;
	}
	/** END file: navPane/windows/item/item.js */

	/** START file: navPane/windows/navPane.js */
	export interface __NavPaneProps extends __BasicProps {
		canPaneToggle?: boolean;
		defaultIsPaneExpanded?: string;
		onPaneToggle?: React.EventHandler<any>;
		paneCompactedLength?: string | number;
		paneExpandedLength?: string | number;
		openLength: string | number;
		selected?: string;
		push: boolean;
	}
	/** END file: navPane/windows/navPane.js */


}

