
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
        case 'updatePostDetail': {
            return {
                ...state,
                detail: action.data
            };
        }
        case 'updateTitle': {
            return {
                ...state,
                title: action.data
            }
        }
        case 'updateImageUrl': {
            return {
                ...state,
                imageUrl: action.data
            }
        }
        case 'updateAlbumImage': {
            return {
                ...state,
                albumImageUrl: action.data
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}