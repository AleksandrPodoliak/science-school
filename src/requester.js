const CryptoJS = require("crypto-js");

export async function requester(payload = {}) {

  const body = JSON.stringify({
    timeout: 60,
    ops: [{
        conv_id: "1123915",
        type: "create",
        obj: "task",
        data: payload
    }]
  });

  let date = Math.floor(Date.now() / 1000);
  let apiLogin = 122614;
  let secretKey = "7bztwVFCrPEokIsaiVHhxc7rqnPCBMjyhfPPtm2JkcVLM25r1D";
  let signature = date+secretKey+JSON.stringify(body)+secretKey;

  let hash = CryptoJS.enc.Hex.stringify(
    CryptoJS.SHA1(signature)
);

  // let hash = CryptoJS.SHA1(signature);
  const urlfetch = 'https://sync-api.corezoid.com/api/1/json/'+apiLogin+'/'+date+'/'+hash;
  console.log(urlfetch);


  const response = await fetch(urlfetch, {
      method: 'post',
      // mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: body,
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}
