import { generateUUID } from "../../navigators/Functions";

export class WhatsappContent {
    constructor(id, time, content, type, messageType, messageStatus) {
      this.id = id;
      this.time = time;
      this.content = content;
      this.type = type;
      this.messageType = messageType;
      this.messageStatus = messageStatus;
    }
  }

  export class WhatsappConversation {
    constructor(id, title, partner, contents) {
      this.id = id;
      this.title = title;
      this.partner = partner;
      this.contents = contents;
    }
    static Empty(){
      return new WhatsappConversation(generateUUID(), '', WhatsappUser.Empty(), []);
    }
  }

  export class WhatsappUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
    }
    static Empty(){
      return new WhatsappUser(generateUUID(),'Partner Fullname', null);
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