import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import './components/buttons'

const view = (state, {updateState}) => {
	const names = ['Dylan', 'Lily', 'Andy'];
	console.log(names)
	return (
		<div>
			<p>Test</p>
			{
				names.map(x=>{
					return <dev-button name={x}></dev-button>
				})
			}
			{/* <dev-button name='WIll'></dev-button> */}

		</div>
	);
};

createCustomElement('vivid-willmcgill-list', {
	renderer: {type: snabbdom},
	view,
	properties: {
		name:{
			default: 'Default',

		}
		
	},
	styles
});
