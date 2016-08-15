
declare module 'react-desktop/windows' {

	import * as React from 'react';
	import { __NavPaneProps } from 'react-desktop-props';

	export class NavPane extends React.Component<__NavPaneProps,void> {
		propTypes: __NavPaneProps
		contextTypes: themeContextTypes;
		render(): JSX.Element
		renderContent(): any
	}

}