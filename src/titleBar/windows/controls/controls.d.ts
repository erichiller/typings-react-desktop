declare module 'react-desktop/windows' {
	import * as React from 'react';
	
	export class Controls extends React.Component<any,void>{
		propTypes: {
			onCloseClick: Function,
			onMinimizeClick: Function,
			onRestoreDownClick: Function,
			onMaximizeClick: Function
		}

		render(): JSX.Element;
	}
}