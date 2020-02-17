# Node.js Static Server

This tutorial uses the express module.

## Check software

Make sure you have git, node, and npm installed on your system.  NPM should have installed when you installed node.

Check that you have bye correct code by running the following commands:

```bash
    git  --version
    node --version
    npm  --version
```

## Create a git repo. (Optional, but recommended)

* If you do not have a github account, create one using your @missouriwestern.edu email address.  Give the account a professional-sounding name.  Your first and lastname run together may work.
* Go to [https://education.github.com/pack](https://education.github.com/pack) and upgrade to a pro account for free.  Mainly this will give you access to private repos.
* Create a new repo.
  * Create a .gitIgnore.  Use the "node" template for the repo.
  * Create a README.md file
  * Optional: Set up a ssh key so you don't have to keep putting in your password.
  * Copy the url of your new repo.  Use the https:// address if you do not have an ssh key.  If you do have an ssh key then use the ssh option.
  * Open a command window and move to the folder above where you want your files to go.
  * Enter the following command.  Past your repo url in place of REPO_URL

```bash
    git clone REPO_URL
```

At some point you will probably be promoted to set your global user name and email.  Do it when prompted.

## Create the server

If you did the optional step above, you should have created the above folder when you cloned the repo.  If you
did not clone a repo then create a directory from the command line.

* cd into the directory
* Execute the command ```npm init```
* Answer the questions.  If you don't know the answer to a question, accept the defaults.
* Issue the two following commands

```bash
   npm install express --save
   npm install dotenv --save
```

* Create a file named "index.js"
* Put the following code in your index.js file:

```javascript
const express = require("express");
require("dotenv").config();

const app = express();
console.log(process.env.wordnikKey);

const port = process.env.PORT;
app.listen(port, () => console.log("Listening on port " + port));
app.use(express.static("public_html"));
```

* create a folder named "public_html"
* create a file called ".env"  The leading dot and the exact name are important!
* put the following data into the .env file.  I assume you have an api key for wordnik and griphy.  If you do not have them, then do not do that step.

```text
PORT=8080
```

### Test your setup

* Create an index.html file in the public_html folder.
* Type the following command line: ```node index.js```
* Open your browser and point it to localhost:8080.  You should see your index.html page
* Add some features and test them.
  * Add a style.css file and link it
  * Add an image and include it.
  * Add some JavaScript.  Try this one:
```javascript
<script>
require("dotenv").config();
console.log(process.env.POST);
console.log(process.env.WORDNIK_API_KEY);
</script>
```

* Make a folder under public_html and put a file in it.  Link between the pages.

