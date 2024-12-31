import { generateUUID } from "../navigators/Functions";

export class Post {
    constructor(id, title, partner, imageUrl, detail, type) {
      this.id = id;
      this.title = title;
      this.type = type,
      this.partner = partner;
      this.imageUrl = imageUrl;
      this.detail = detail;
    }
    static Empty(type){
      return new Post('', '', PostUser.Empty(), '', PostDetail.Empty(), type);
    }
}

export class PostDetail {
  constructor() {
    this.time = '6 days ago';
    this.description = 'You can add #hashtags or desired text for post description.';
    this.likeCount = '250';
    this.commentCount = '25';
    this.sharedCount = '0';
    this.isLike = true;
    this.showMore = true;
  }
  static Empty(){
    return new PostDetail();
  }
}

export class PostUser {
    constructor(id, fullname, profileImage) {
      this.id = id;
      this.fullname = fullname;
      this.profileImage = profileImage;
      this.isVerified = false;
      this.followType = FollowType.HIDE;
      this.geoLocation = '';
    }
    static Empty(){
      return new PostUser(generateUUID(),'Partner Name', '');
    }
}

export const FollowType = {
  HIDE: 'Hide',
  FOLLOW: 'Follow',
  FOLLOWING: 'Following'
}