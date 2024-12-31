
export function postReducer(state, action) {
    switch (action.type) {
        case 'updatePartner': {
            return {
                ...state,
                partner: action.data
            };
        }
        case 'updatePostDetail': {
            return {
                ...state,
                detail: action.data
            };
        }
        case 'updatePostImage': {
            return {
                ...state,
                imageUrl: action.data
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}