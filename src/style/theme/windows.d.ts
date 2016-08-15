

declare module 'react-desktop/windows' {

	import * as React from 'react';

	type themePropTypes = {
		theme: string
	};

	type themeContextTypes = {
		theme: string
	}

	type props = {};
	type context = {};

	/**
	 * @function
	 * @return {props} applyProps.basic()
	 */
	interface applyThemeProps { ( props: props , context: context ): applydefaultProps }

	function ThemeContext(): ComposedComponent;

	class ComposedComponent extends React.Component<themePropTypes,void> {
		propTypes: themePropTypes;
		contextTypes: themeContextTypes;
		childContextTypes: themeContextTypes;

		getChildContext(): themePropTypes;
		/**
		 * @function render
		 * @returns {JSX.Element} | returns ComposedComponent
		 */
		render(): JSX.Element;
	}

}