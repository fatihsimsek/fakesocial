import { generateUUID } from "../../navigators/Functions";
import { ListTypes } from "../Types";

export class WhatsappContent {
    constructor(id, time, content, type, messageType, messageStatus, imageUrl) {
      this.id = id;
      this.time = time;
      this.content = content;
      this.type = type;
      this.messageType = messageType;
      this.messageStatus = messageStatus;
      this.imageUrl = imageUrl;
    }
  }

  export class WhatsappConversation {
    constructor(id, title, partner, contents) {
      this.id = id;
      this.title = title;
      this.type = ListTypes.WHATSAPP,
      this.partner = partner;
      this.contents = contents;
      this.tempContent = WhatsappModalContent.Empty();
    }
    static Empty(){
      return new WhatsappConversation('', '', WhatsappUser.Empty(), []);
    }
  }

  export class WhatsappUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
    }
    static Empty(){
      return new WhatsappUser(generateUUID(),'Partner Name', '');
    }
  }

  export const WhatsappMessageStatus = {
    RECEIVED:'Received',
    SEEN: 'Seen',
    SEND: 'Send',
  }

  export const WhatsappMessageType = {
    SEND: 'Send',
    RECEIVED: 'Received'
  }

  export const WhatsappContentType = {
    MESSAGE: 'Message',
    BREAK: 'Break'
  }

  export class WhatsappModalContent {
    constructor(id, content, isSend, isBreak, status, time, imageUrl) {
      this.id = id;
      this.content = content;
      this.isSend = isSend;
      this.isBreak = isBreak;
      this.status = status;
      this.time = time;
      this.imageUrl = imageUrl;
    }
    static Empty(){
      return new WhatsappModalContent('', '', true, false, WhatsappMessageStatus.SEEN, '00:00', '');
    }
  }
