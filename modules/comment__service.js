import { APP_ID, INVOLVEMENT } from './api_helper';
import { toJson } from './json_helper';
// import Movie from './movie';

class CommentService {
  static commentItems = [];

  static commentsNumber = [];

  static postComments = async (data) => {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GS6aSBgYKfRiD4MOAqjW/comments', {
      method: 'POST',
      body: toJson(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const res = await result.json();

    return res;
  };

  static getItemComments = async (dataId) => {
    const result = await fetch(`${INVOLVEMENT}/${APP_ID}/comments?item_id=${dataId.toString()}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    });
    this.commentItems = await result.json();
    console.log(this.commentItems);
  };
}

export default CommentService;
