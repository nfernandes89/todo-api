# bootstrap-hapi

<p>Bootstrap for starting a new API, using Node, HAPI and TypeScript.</p>
<br>

<h2>About this project</h2>
<p>Creation of a To Do List REST Api, with a group of tasks stored at MongoDB Atlas.</p>
<br>

<h2>Code Flow</h2>
<p>1 - app.ts</p>
<p>2 - server.ts</p>
<p>3 - routes/todo/index.ts</p>
<p>4 - routes/todo/routes.ts</p>
<p>5 - routes/todos/service.ts</p>
<br>

<h2>Postman</h2>
<p>Using Postman to perform CRUD requests:</p>
<p>GET all tasks: /api/todo</p>
<p>POST a new task: /api/todo (insert the new task in Body - Raw - JSON)</p>
<p>GET one task: /api/todo/{id}</p>
<p>PUT a task: /api/todo/{id} (update the task in Body - Raw - JSON)</p>
<p>DELETE a task: api/todo/{id}</p>
<p>GET / Search a task: api/todo/search (query params: KEY=description)</p>
<br>

<h2>Tests</h2>
<p>Using Jest, perform routes' test with the file routes.spec.ts</p>
<p>Run the command <code>npm run test:w</code></p>
