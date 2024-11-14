import { WhatsappModalContent } from './WhatsappTypes'

export function conversationReducer(state, action) {
    switch (action.type) {
      case 'addContent': {
        return {
          ...state,
          contents:[
            ...state.contents,
            action.data
          ],
          tempContent: WhatsappModalContent.Empty()
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
          tempContent: WhatsappModalContent.Empty()
        };
      }
      case 'deleteContent': {
        let deletedContents = state.contents.filter((t) => t.id !== action.id);
        return {
          ...state,
          contents: deletedContents
        };
      }
      case 'updateTempContent': {
        return {
          ...state,
          tempContent: action.data
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }