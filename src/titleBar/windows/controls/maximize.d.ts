declare module 'react-desktop/windows' {
	import * as React from 'react';

	
	export class Maxmimize extends React.Component<any,any> {

		contextTypes:
			themeContextTypes &
			backgroundContextTypes &
			{ isMaximized: boolean };

		render(): JSX.Element;

	}
}