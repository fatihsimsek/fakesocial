import React from 'react';
import { ConversationContentType } from '../../views/ConversationTypes';
import WhatsappDateBreak from './WhatsappDateBreak';
import WhatsappMessageBubble from './WhatsappMessageBubble';

function WhatsappDialogItem({data}) {
    if(data.type == ConversationContentType.BREAK){
        return (
            <WhatsappDateBreak data={data} />
        );
    } 
    else {
        return (
            <WhatsappMessageBubble data={data} />
        );
    }
}

export default WhatsappDialogItem;