declare module 'react-desktop/windows' {
	import * as React from 'react';

	import { __BasicProps } from 'react-desktop-props';

	/** START file: navPane/windows/navPane.js */
	
	type __TitleBarProps = 
		hiddenPropTypes &
		themePropTypes &
		colorPropTypes & 
		backgroundPropTypes & 
		{
			title: string,
			controls: boolean,
			isMaximized: boolean,
			onCloseClick: Function,
			onMinimizeClick: Function,
			onMaximizeClick: Function,
			onRestoreDownClick: Function
		}

	type __TitleBarChildContext = {
			isMaximized: boolean;
		}


	/** END file: navPane/windows/navPane.js */


	export class TitleBar extends React.Component<any,void> {

		propTypes: __TitleBarProps;

		childContextTypes: __TitleBarChildContext;

		contextTypes: themeContextTypes;

		getChildContext(): __TitleBarChildContext;



		

	}
	
}