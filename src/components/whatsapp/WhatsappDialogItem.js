import React from 'react';
import { WhatsappContentType } from '../../views/whatsapp/WhatsappTypes';
import WhatsappDateBreak from './WhatsappDateBreak';
import WhatsappMessageBubble from './WhatsappMessageBubble';

function WhatsappDialogItem({data}) {
    if(data.type == WhatsappContentType.BREAK){
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