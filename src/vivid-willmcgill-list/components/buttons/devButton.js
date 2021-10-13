import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './devButtonStyles.scss';

const view = (state, helpers) => {

    const { name } = state.properties;
    const { dispatch } = helpers;

	return (
		<div>
            <button
                on-click={()=>{
                    dispatch('ADD_TO_LIST', {
                        name: name
                    })
                }}>
                {name}
            </button>
        </div>
	);
};

createCustomElement('dev-button', {
	renderer: {type: snabbdom},
	view,
    actionHandlers:{
        'ADD_TO_LIST': (coeffects) => {
            const {name} = coeffects.action.payload;

            console.log(name)
        }
    },
    properties:{
        name: {
            default: 'No Name'
        }
    },
	styles
});