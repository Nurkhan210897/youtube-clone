const apiKey = "AIzaSyCiqaaQ2uF9VfhjoMONf62kTAKUaO6SrYw";
const url = "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet&maxResults=20&key="

export default class Http {
  static get<T>(): Promise<T> {
    return fetch(`${url}${apiKey}`).then((response) =>
      response.json()
    );
  };

  static post(data: any) {
    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());

    return console.log("test post");
  };
};
