import React from 'react';
import { ConversationContentType } from '../../views/ConversationTypes';
import TikTokDateBreak from './TikTokDateBreak';
import TikTokMessageBubble from './TikTokMessageBubble';

function TikTokDialogItem({data, partner}) {
    if(data.type == ConversationContentType.BREAK){
        return (
            <TikTokDateBreak data={data} />
        );
    } 
    else {
        return (
            <TikTokMessageBubble data={data} partner={partner} />
        );
    }
}

export default TikTokDialogItem;