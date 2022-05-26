import { INVOLVEMENT } from './api_helper';
import { toJson } from './json_helper';

class CommentService {
  static commentItems = [];

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

  static commentCounter = () => this.commentItems.length || 0;
}

export default CommentService;
