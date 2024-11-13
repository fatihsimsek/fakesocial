export function conversationReducer(state, action) {
    switch (action.type) {
      case 'addContent': {
        return {
          ...state,
          contents:[
            ...state.contents,
            action.data
          ]
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
          contents: updatedContents
        };
      }
      case 'deleteContent': {
        let deletedContents = state.contents.filter((t) => t.id !== action.id);
        return {
          ...state,
          contents: deletedContents
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }