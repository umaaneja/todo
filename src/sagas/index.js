import db from "./../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
const collection_name = "todos";

function* fetchTodos() {
  console.log("running fetch todos");
  let receivedData = [];
  const fetchTodos = async () => {
    const response = db.collection(collection_name);
    const data = await response.get();
    data.docs.forEach((item) => {
      console.log("checking here :: ", item);
      console.log(item.data());
      //setBlogs([...blogs,item.data()])
      receivedData.push({ todo: item.data().todo, id: item.id });
    });
  };
  yield fetchTodos();
  console.log(receivedData);
  yield put({ type: "receivedTodos", payload: receivedData });
}

function* addTodos(data) {
  console.log("add fetch todos");
  let receivedData = [];
  console.log(data);
  let todo = data.payload;
  const addData = async () => {
    await addDoc(collection(db, collection_name), {
      todo,
    }).then(docRef => {
      receivedData.push({todo:todo,id:docRef.id})
      console.log("Document written with ID: ", docRef.id);
  });
  };
  yield addData();
  yield put({ type: "updateTodos", payload: receivedData });
}

function* deleteTodo(data) {
  console.log("add fetch todos");
  //console.log(data.payload[data.payload.length-1]);
  //let todo = data.payload[data.payload.length-1];
  console.log(data.payload.toString());
  let id = data.payload.toString();
  const deleteData = async () => {
    await db.collection(collection_name).doc(id).delete();
  };
  yield deleteData();

  //yield put({ type: "receivedTodos", payload: receivedData });
}

function* actionWatcher() {
  console.log("running actionWatcher");
  yield takeLatest("fetchTodos", fetchTodos);
  yield takeEvery("addTodos", addTodos);
  yield takeEvery("deleteTodo", deleteTodo);
}
export default function* rootSaga() {
  console.log("running rootsaga");
  yield all([actionWatcher()]);
}
