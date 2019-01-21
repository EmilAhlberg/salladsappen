import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS,
  LOGIN_ACTION
} from ".././ReduxActionStrings.js";

export const networkAction = () => dispatch => {
  fetch("http://192.168.0.108:8550/backend_get")
    .then(response => response.json())
    .then(
      json => dispatch({ type: FETCH_ACTION_SUCCESS, payload: json.express }),
      err => dispatch({ type: FETCH_ACTION_FAIL, payload: err })
    );
};

export const loginAction = (username, password) => dispatch => {
  fetch("http://192.168.0.108:8550/backend_insert_one", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(response => console.log(response.json()));
  /*.then(
      json => dispatch({ type: FETCH_ACTION_SUCCESS, payload: json.express }),
      err => dispatch({ type: FETCH_ACTION_FAIL, payload: err })
  );*/
};
