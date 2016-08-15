
declare module 'react-desktop/windows' {

	import * as React from 'react';
	import { __NavPaneItemProps , __NavPaneItemState } from 'react-desktop-props';

	class Item extends React.Component<__NavPaneItemProps,__NavPaneItemState> {
		constructor()
		componentWillReceiveProps(nextProps);
	}


	export { Item as NavPaneItem }
}

