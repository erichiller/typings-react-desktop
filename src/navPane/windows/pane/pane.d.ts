declare module 'react-desktop/windows' {

	import * as React from 'react';
	import { __NavPaneProps , __ElementsType } from 'react-desktop-props';

	export class Pane extends React.Component<__NavPaneProps,void> {
		constructor(props,...any)
		propTypes: {
			items: __ElementsType
			canPaneToggle: boolean
			onPaneToggle: Function
			defaultIsPaneExpanded: boolean
			paneCompactedLength: string | number
			paneExpandedLength: string | number
		}
		defaultProps: {
			canPaneToggle: boolean
			defaultIsPaneExpanded: boolean
			paneCompactedLength: string | number
			paneExpandedLength: string | number
		}
		toggleOpen:Function;
		render(): JSX.Element
		renderItems(): JSX.Element | JSX.Element[]
	}




}