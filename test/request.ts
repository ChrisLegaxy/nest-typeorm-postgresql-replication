import axios from "axios"

const callAPI = () => {
  axios.get("http://server.ecs.dev/users");
}

/**
 * 10 requests (GET) every 200ms 1000 times
 * * ensure pg pool load balancing in the pg cluster
 * * success ✅
 */
(function theLoop (i: number) {
  setTimeout(() => {
    console.log(i)
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
    callAPI();
      if (--i) {
          theLoop(i);
      }
  }, 200);
})(1000);
