const CryptoJS = require("crypto-js");

export async function requester(payload = {}) {

  console.log('payload :>> ', payload);
  const TIMESTAMP = Math.floor(Date.now() / 1000);
  const LOGIN = '122614';
  const SECRET = '7bztwVFCrPEokIsaiVHhxc7rqnPCBMjyhfPPtm2JkcVLM25r1D';

  const BODY = {
    "timeout": 30,
    "ops": [
      {
        "conv_id": 1123915,
        "type": "create",
        "obj": "task",
        "data": {}
      }
    ]
  };

  const SIGNATURE = CryptoJS.enc.Hex.stringify(
      CryptoJS.SHA1(TIMESTAMP + SECRET + BODY + SECRET)
  );

  console.log('SIGNATURE :>> ', SIGNATURE);

  const url = `https://sync-api.corezoid.com/api/1/json/${LOGIN}/${TIMESTAMP}/${SIGNATURE}`;

  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache',
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json; charset=utf8',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(BODY) // body data type must match "Content-Type" header
    // body: JSON.stringify(BODY) // body data type must match "Content-Type" header
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}