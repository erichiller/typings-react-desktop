

declare module 'react-desktop/windows' {

	type colorPropTypes = string | boolean;

	type colorContextType = string | boolean;

	type applyColorProps = ( props: props, context: context ) => { applydefaultProps(props: props,context: context, {color: string}) }

	/**
	 * @function ColorContext
	 * @param {boolean} preserveProperty
	 */
	function ColorContext(preserveProperty: boolean): ComposedComponent;


}