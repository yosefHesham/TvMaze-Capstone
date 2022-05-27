import { INVOLVEMENT } from './api_helper';
import { toJson } from './json_helper';
import Movie from './movie';

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
    const result = await fetch(`${INVOLVEMENT}/${process.env.APP_ID}/comments/?item_id=${dataId}`, {
      method: 'GET',
    });
    this.commentItems = await result.json();
  };

  static commentCounter = async (id) => {
    const result = await fetch(`${INVOLVEMENT}/${process.env.APP_ID}/comments/?item_id=${Number(id)}`, {
      method: 'GET',
    });
    const res = await result.json();
    this.commentsNumber = await res;
    console.log(this.commentsNumber.length || 0)
    return this.commentsNumber.length;
  }
}

export default CommentService;
