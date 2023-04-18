import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    const todos = res.data;
    console.log(`There are ${todos.length} todo's`);
  })
  .catch((err) => console.log(err));
