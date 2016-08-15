
declare module 'react-desktop/windows' {

	import * as React from 'react';

	/**
	 * @function applyProps.basic
	 * @param {props} props
	 * @param {context} context
	 * @param {Props.basic} Props.basic | set to { theme: 'light' } by default
	 * @return {props} finalProps;
	 */
	type applydefaultProps = ( props: props , context: context , defaultProps: props ) => props

	/**
	 * @function extractProps
	 * @return {[props,props]} finalProps,extractedProps
	 */
	function extractProps(props: props, proptypes: props): [props, props]

}