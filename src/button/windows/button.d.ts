declare module 'react-desktop/windows' {

	import * as React from 'react';
	import { __NavPaneItemProps , __NavPaneItemState } from  'react-desktop-props';


	class Button extends React.Component<__NavPaneItemProps,__NavPaneItemState> {
		propTypes:
			colorPropTypes |
			themePropTypes | 
			{
				type: string
				push: boolean
				onClick: Function
			}

			contextTypes: {

			}

	}

}