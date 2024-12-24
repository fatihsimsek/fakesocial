import { ConversationModalContent } from '../ConversationTypes'

export function conversationReducer(state, action) {
    switch (action.type) {
        case 'addContent': {
            return {
                ...state,
                contents:[
                ...state.contents,
                action.data
                ],
                tempContent: ConversationModalContent.Empty()
            };
        }
        case 'updateContent': {
            let updatedContents = state.contents.map((c) => {
                if (c.id === action.data.id) {
                    return action.data;
                } else {
                    return c;
                }
            });
            return {
                ...state,
                contents: updatedContents,
                tempContent: ConversationModalContent.Empty()
            };
        }
        case 'deleteContent': {
            let deletedContents = state.contents.filter((t) => t.id !== action.id);
            return {
                ...state,
                contents: deletedContents,
                tempContent: ConversationModalContent.Empty()
            };
        }
        case 'updateTempContent': {
            return {
                ...state,
                tempContent: action.data
            };
        }
        case 'deleteTempContent': {
            return {
                ...state,
                tempContent: ConversationModalContent.Empty()
            };
        }
        case 'updatePartner': {
            return {
                ...state,
                partner: action.data
            };
        }
        case 'updateConversation': {
            return {
                ...state,
                id: action.data.id,
                title:action.data.title
            };
        }
        case 'initConversation': {
            return {
                ...action.data,
                tempContent: ConversationModalContent.Empty()
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