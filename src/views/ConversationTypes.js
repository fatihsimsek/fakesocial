import { generateUUID } from "../navigators/Functions";

export class ConversationContent {
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

  export class Conversation {
    constructor(id, title, partner, type, contents) {
      this.id = id;
      this.title = title;
      this.type = type,
      this.partner = partner;
      this.contents = contents;
      this.tempContent = ConversationModalContent.Empty();
    }
    static Empty(type){
      return new Conversation('', '', ConversationUser.Empty(), type, []);
    }
  }

  export class ConversationUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
      this.isOnline = true;
      this.isVerified = false,
      this.onlineText = '';
    }
    static Empty(){
      return new ConversationUser(generateUUID(),'Partner Name', '');
    }
  }

  export const ConversationMessageStatus = {
    RECEIVED:'Received',
    SEEN: 'Seen',
    SEND: 'Send',
  }

  export const ConversationMessageType = {
    SEND: 'Send',
    RECEIVED: 'Received'
  }

  export const ConversationContentType = {
    MESSAGE: 'Message',
    BREAK: 'Break'
  }

  export class ConversationModalContent {
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
      return new ConversationModalContent('', '', true, false, ConversationMessageStatus.SEEN, '00:00', '');
    }
  }
