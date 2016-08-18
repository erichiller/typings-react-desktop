


declare module 'react-desktop/windows' {

	type hiddenPropTypes = { 
		hidden: boolean;
	};

	function removeHiddenProps(props: props): {string: any}

	function mapHiddenStyle(key: any, value: any): any;

	//function styleHelper(...options, hiddenPropTypes, mapHiddenStyle):
	class styleHelper {
		constructor(any,propTypes,mapStyleCallback,mapStylesCallback,mapProps) 

		doStyleHelper(WrappedComponent): JSX.Element;
	}


}