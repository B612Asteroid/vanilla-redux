import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer는 여기서 State와 액션에 따른 행동을 정의
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const store = createStore(countModifier);

const onChange = () => {
  number.innerHTML = store.getState();
}

// #. 스토어에 변화가 일어났을 때 처리를 여기서 해준다.
store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: "ADD" })
}

const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
}

// Store은 내 state를 저장하는 공간을 생성
plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);