import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './devButtonStyles.scss';

const view = (state, {updateState}) => {

    const {name} = state.properties;
    
	return (
		<div>
            <button>{name}</button>
        </div>
	);
};

createCustomElement('dev-button', {
	renderer: {type: snabbdom},
	view,
    actionHandlers:{

    },
    properties:{
        name: {
            default: 'No Name'
        }
    },
	styles
});