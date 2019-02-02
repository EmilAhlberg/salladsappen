import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from ".././ReduxActionStrings.js";

export const networkAction = () => dispatch => {
  fetch("http://192.168.0.108:8550/backend_get")
    .then(response => response.json())
    .then(
      json => dispatch({ type: FETCH_ACTION_SUCCESS, payload: json.express }),
      err => dispatch({ type: FETCH_ACTION_FAIL, payload: err })
    );
};

export const loginAction = (username, password) => dispatch =>
  //Promise returned to UI caller
  new Promise(function(resolve, reject) {
    fetch("http://192.168.0.108:8550/posts/findUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(response => {
      response.json().then(res => {
        let actionType = res.body.status == 1 ? LOGIN_SUCCESS : LOGIN_FAIL;
        resolve(res);
        reject(res); //TODO: handle  network errors
        dispatch({ type: actionType });

        //console.log("res:");
        //console.log(res.body.username, res.body.password);
      });
    });
  });
export const registerAction = (username, password) => dispatch => {
  fetch("http://192.168.0.108:8550/posts/new", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(response => {
    if (response.status == 200) console.log("registered!");
  });
  /*
  fetch("http://192.168.0.108:8550/posts/", {}).then(response => {
    response.json().then(function(data) {
      console.log("data:");
      console.log(data);
    });
  });
  */
};
