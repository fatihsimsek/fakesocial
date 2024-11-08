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
    constructor(id, title, secondUser, contents) {
      this.id = id;
      this.title = title;
      this.secondUser = secondUser;
      this.contents = contents;
    }
  }

  export class WhatsappUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
    }
  }

  export const WhatsappMessageStatus = {
    READ:'Read',
    UNREAD: 'UnRead',
    REACHED: 'Reached'
  }

  export const WhatsappMessageType = {
    SEND: 'Send',
    RECEIVED: 'Received'
  }

  export const WhatsappContentType = {
    MESSAGE: 'Message',
    BREAK: 'Break'
  }