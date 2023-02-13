# To-Do List API

<h2>About this project</h2>
<p>Creation of a To-Do List Rest API with some tasks stored at <strong>MongoDB Atlas</strong>.</p>
<p><Bootstrap for starting a new API, using Node, HAPI and TypeScript.</p>
<br>
  
<h2>Code Flow</h2>
<p>1 - <code>app.ts</code></p>
<p>2 - <code>server.ts</code> (ATTENTION: MongoDB plugin in <code>src/lib/mongo.ts</code></p>
<p>3 - <code>routes/todo/index.ts</code></p>
<p>4 - <code>routes/todo/routes.ts</code></p>
<p>5 - <code>routes/todos/service.ts</code></p>
<br>

<h2>Testing with Postman</h2>
<p>Using <strong>Postman</strong> to perform CRUD requests:</p>
<p><strong>GET</strong> all tasks: /api/todo</p>
<p><strong>POST</strong> a new task: /api/todo (insert the new task in Body -> Raw -> JSON)</p>
<p><strong>GET</strong> one task: /api/todo/{id}</p>
<p><strong>PUT</strong> a task: /api/todo/{id} (update the task in Body -> Raw -> JSON)</p>
<p><strong>DELETE</strong> a task: api/todo/{id}</p>
<p><strong>GET</strong> / Search a task: api/todo/search (query params: KEY=description)</p>
<br>

<h2>Testing with Jest</h2>
<p>Using <strong>Jest</strong> to perform routes' test with the file <code>routes.spec.ts</code></p>
<p>Run the command <code>npm run test:w</code></p>
