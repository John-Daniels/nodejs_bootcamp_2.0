# Exercise: Creating and Manipulating Files with fs and path

## Task 1: Creating Directories and Files

- Create a new directory called `node-exercise` using the fs module.

- Inside the node-exercise directory, create a new file called `main.js` using the fs module.

- Use the path module to resolve the path to the node-exercise directory and log it to the console.

## Task 2: Writing and Reading Files

- Write the text `console.log('Hello, World!')` to the main.js file using the fs module.
- Read the contents of the main.js file and log them to the console.
- Append the text This is my first Node.js program. to the main.js file using the fs module.
- Read the contents of the main.js file again and log them to the console.

## Task 3: Renaming and Deleting Files

- Rename the main.js file to index.js using the fs module.
  Use the path module to resolve the path to the index.js file and log it to the console.
- Delete the index.js file using the fs module.
  Use the path module to resolve the path to the node-exercise directory and delete it, along with all its contents, using the fs module.

## Bonus Task: Working with Directories

- Create a new directory called data inside the node-exercise directory using the fs module.
- Create a new file called data.txt inside the data directory using the fs module.
- Write some text to the data.txt file using the fs module.
  Read the contents of the data.txt file and log them to the console.
- Rename the data.txt file to config.txt using the fs module.
  Use the path module to resolve the path to the config.txt file and log it to the console.
- Delete the data directory, along with all its contents, using the fs module.
  Tips:

> Use the `fs.writeFile()` method to write text to a file.

> Use the `fs.readFile()` method to read the contents of a file.

> Use the `fs.appendFile()` method to append text to a file.

> Use the `fs.rename()` method to rename a file.

> Use the `fs.unlink()` method to delete a file.

> Use the `fs.rmdir()` method to delete a directory.

> Use the `fs.mkdir()` method to create a directory.

> Use the `path.resolve()` method to resolve a path to an absolute path.

## Submittion

> Push your code to github

> send your github code link to `daniel.adeyemi@thebulb.africa`

## Good Luck
