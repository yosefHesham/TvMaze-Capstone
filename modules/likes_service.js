import { APP_ID, INVOLVEMENT } from './api_helper.js';
import { toJson } from './json_helper.js';

class LikesService {
  static itemLikes = [];

  static postItemLikes = async (id) => {
    const result = await fetch(`${INVOLVEMENT}/${APP_ID}/likes`, {
      method: 'POST',
      body: toJson({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const res = await result.json();
    return res;
  };

  static getItemLikes = async () => {
    const res = await fetch(`${INVOLVEMENT}/${APP_ID}/likes`, {
      method: 'GET',
    });
    this.itemLikes = await res.json();
  };

  static getOneItemLikes = (id) => {
    const item = this.itemLikes.find((e) => e.item_id === id);

    if (item) {
      return item.likes;
    }
    return 0;
  }
}

export default LikesService;
