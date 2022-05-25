import { INVOLVEMENT } from "./api_helper";
import { toJson } from "./json_helper";

class LikesService {
  static itemLikes = [];
  static postItemLikes = async (id) => {
    const result = await fetch(`${INVOLVEMENT}/${process.env.APP_ID}/likes`, {
      method: 'POST',
      body: toJson({"item_id":id}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const res = await result.json();
    return res;
  };

  static getItemLikes = async () => {
    const result = await fetch(`${INVOLVEMENT}/${process.env.APP_ID}/likes`, {
      method: "GET",
    });
    const data = await result.json();
    console.log(data);

  };

}

export default LikesService;
