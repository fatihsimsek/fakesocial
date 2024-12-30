
export function postReducer(state, action) {
    switch (action.type) {
        case 'updatePartner': {
            return {
                ...state,
                partner: action.data
            };
        }
        case 'updatePost': {
            return {
                ...state,
                id: action.data.id,
                title:action.data.title
            };
        }
        case 'initPost': {
            return {
                ...action.data
            }
        } 
        case 'updateTitle': {
            return {
                ...state,
                title: action.data
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}