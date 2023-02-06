import type {ServerRoute, Request} from '@hapi/hapi'
import {
  Task,
  getAll,
  getOne,
  create,
  update,
  remove,
  search,
} from './service'


/**
 * Get all tasks
 * @handle `GET /`
 */
const getToDoAll = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/',
  handler: (req, _h) => {
    // get data from request
    const {mongo} = req
    const offset = Number(req.query['offset']) ?? 0
    const limit = Number(req.query['limit']) ?? 20

    // call handler (request-agnostic)
    return getAll(mongo, offset, limit)
  },
})

/**
 * Add a new task to the database
 * @handle `POST /`
 */
const postToDo = Object.freeze<ServerRoute>({
  method: 'POST',
  path: '/',
  options: {
    validate: {
      payload: (v: unknown) => Task.parseAsync(v),
    },
  },
  handler: async (req: Request<{Payload: Task}>, h) => {
    // get data from request
    const mongo = req.mongo
    const task = req.payload

    // call handler (request-agnostic)
    const res = await create(mongo, task)
    return h.response(res)
      .code(201)
      .header('location', `${req.url}/${res.insertedId}`)

    // refer to https://www.rfc-editor.org/rfc/rfc9110.html#name-location
  },
})

/**
 * Get one task
 * @handle `GET /{id}`
 */
const getToDoOne = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/{id}',
  handler: async (req, _h) => {
    // get data from request
    const {mongo} = req
    const {id} = req.params

    // call handler (request-agnostic)
    return getOne(mongo, id)
  },
})

/**
 * Replace a task
 * @handle `PUT /{id}`
 */
const putToDo = Object.freeze<ServerRoute>({
  method: 'PUT',
  path: '/{id}',
  options: {
    validate: {
      payload: (v: unknown) => Task.parseAsync(v),
    },
  },
  handler: async (req: Request<{Payload: Task}>, h) => {
    // get data from request
    const {mongo} = req
    const {id} = req.params
    const task = req.payload

    // call handler (request-agnostic)
    return update(mongo, id, task)
  },
})

/**
 * Delete a task from the database
 * @handle `DELETE /{id}`
 */
const deleteToDo = Object.freeze<ServerRoute>({
  method: 'DELETE',
  path: '/{id}',
  handler: async (req, _h) => {
    // get data from request
    const {mongo} = req
    const {id} = req.params

    // call handler (request-agnostic)
    return remove(mongo, id)
  },
})

/**
 * Get all tasks
 * @handle `GET /search`
 */
const getToDoSearch = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/search',
  handler: async (req, _h) => {
    // get data from request
    const {mongo} = req
    const term = req.query.term

    // call handler (request-agnostic)
    return search(mongo, term)
  },
})


/**
 * Routes of the plugin `hello`
 */
export default [
  getToDoAll,
  postToDo,
  getToDoOne,
  putToDo,
  deleteToDo,
  getToDoSearch,
]
