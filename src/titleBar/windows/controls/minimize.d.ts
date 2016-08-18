declare module 'react-desktop/windows' {
	import * as React from 'react';

	
	export class Minimize extends React.Component<any,any> {

		contextTypes:
			themeContextTypes &
			backgroundContextTypes;

		render(): JSX.Element;

	}
}