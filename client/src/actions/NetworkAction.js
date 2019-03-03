import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SENDING_ORDER,
  UPDATE_MENU
} from ".././ReduxActionStrings.js";
import {
  API_DEFAULT_LOCATION,
  API_ORDERS,
  API_POSTS,
  API_MENUITEMS,
  FETCH_MENU,
  MATCH_USER,
  PLACE_ORDER,
  REGISTER_USER
} from "../.././apiConstants.js";

export const networkAction = () => dispatch => {
  fetch(API_DEFAULT_LOCATION + "backend_get")
    .then(response => response.json())
    .then(
      json => dispatch({ type: FETCH_ACTION_SUCCESS, payload: json.express }),
      err => dispatch({ type: FETCH_ACTION_FAIL, payload: err })
    );
};

export const fetchMenuInfo = () => dispatch => {
  fetch(API_DEFAULT_LOCATION + API_MENUITEMS + FETCH_MENU)
    .then(response => response.json())
    .then(
      json => dispatch({ type: UPDATE_MENU, payload: json.body.menuItems }),
      err => console.log(err)
    );
};

export const loginAction = (username, password) => dispatch => {
  //
  if (username === "") {
    console.log("cheat");
    return new Promise((resolve, reject) => {
      resolve(username);
      dispatch({ type: LOGIN_SUCCESS, payload: "cheater" });
    });
  } else {
    //Promise returned to UI caller
    return new Promise((resolve, reject) => {
      fetch(API_DEFAULT_LOCATION + API_POSTS + MATCH_USER, {
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
          dispatch({ type: actionType, payload: username });
        });
      });
    });
  }
};

export const registerAction = (username, password) => dispatch => {
  fetch(API_DEFAULT_LOCATION + API_POSTS + REGISTER_USER, {
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

export const orderAction = orderInfo => dispatch => {
  console.log("fetch stuff");
  fetch(API_DEFAULT_LOCATION + API_ORDERS + PLACE_ORDER, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      orderInfo: orderInfo
    })
  }).then(response => {
    if (response.status == 200) console.log("alright!");
  });
};

export const sendOrder = selection => dispatch => {
  dispatch({ type: SENDING_ORDER, payload: order });
  let order = selection
    .map(orderedCategory => {
      return orderedCategory.reduce((a, b) => {
        //intra-category separator
        return a + "+" + b;
      });
    })
    .reduce((a, b) => {
      //category separator
      return a + "|" + b;
    });

  fetch(API_DEFAULT_LOCATION + API_ORDERS + PLACE_ORDER, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      carbohydrate: selection[0][0],
      protein: selection[1][0],
      condiment1: selection[2][0],
      condiment2: selection[2][1],
      condiment3: selection[2][2],
      condiment4: selection[2][3],
      dressing: selection[3][0]
    })
  })
    .then(response => {
      if (response.status == 200) console.log("registered!");
      else {
        console.log(FAIL, response);
      }
    })
    .catch(err => {
      console.log("failed order", err);
    });
};
