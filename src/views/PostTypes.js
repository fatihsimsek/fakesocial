import { generateUUID } from "../navigators/Functions";

export class Post {
    constructor(id, title, partner, imageUrl, type) {
      this.id = id;
      this.title = title;
      this.type = type,
      this.time = '6 days ago',
      this.partner = partner;
      this.imageUrl = imageUrl;
      this.description = 'You can add #hashtags or desired text for post description.',
      this.likeCount = 250,
      this.commentCount = 25,
      this.sendCount = 0,
      this.isLike = true,
      this.showMore = true
    }
    static Empty(type){
      return new Post('', '', PostUser.Empty(), '', type);
    }
}

export class PostUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
      this.isOnline = true;
      this.isVerified = false,
      this.onlineText = '';
    }
    static Empty(){
      return new PostUser(generateUUID(),'Partner Name', '');
    }
}