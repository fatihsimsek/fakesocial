import React from 'react';
import { ConversationContentType } from '../../views/ConversationTypes';
import InstagramDateBreak from './InstagramDateBreak';
import InstagramMessageBubble from './InstagramMessageBubble';

function InstagramDialogItem({data}) {
    if(data.type == ConversationContentType.BREAK){
        return (
            <InstagramDateBreak data={data} />
        );
    } 
    else {
        return (
            <InstagramMessageBubble data={data} />
        );
    }
}

export default InstagramDialogItem;