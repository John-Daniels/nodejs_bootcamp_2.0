const note = {
  title: "My Nodejs Notebook",
  body: "Node.js is javascript Runtime Enviroment powered by Chrome's V8 Engine",
};

// Convert Javascript object into JSON string
const noteJSON = JSON.stringify(note);

// Convert JSON string into object
const noteObject = JSON.parse(noteJSON);
console.log(noteObject.title);
