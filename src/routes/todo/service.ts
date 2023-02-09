import type {HapiMongo} from 'hapi-mongodb'
import z from 'zod'

/** Zod schema to validate one object with name and age */
export const Task = z.object({
  description: z.string().min(2).max(50),
  done: z.boolean(),
  dueDate: z.coerce.date(),
})

export type Task = z.infer<typeof Task>

const projection = Object.fromEntries(
  Object.keys(Task.shape).map(k => [k, 1]),
)

export const getAll = (mongo: HapiMongo, offset: number, limit: number) =>
  mongo.db
    .collection('ToDo_list')
    .find({}, {projection})
    .sort({metacritic: -1})
    .skip(offset)
    .limit(limit)
    .toArray()

export const getOne = (mongo: HapiMongo, id: string) =>
  mongo.db
    .collection('ToDo_list')
    .findOne({_id: new mongo.ObjectID(id)}, {projection})

export const create = (mongo: HapiMongo, task: Task) =>
  mongo.db.collection('ToDo_list').insertOne(task)

export const update = (mongo: HapiMongo, id: string, task: Task) =>
  mongo.db
    .collection('ToDo_list')
    .updateOne({_id: new mongo.ObjectID(id)}, {$set: task})

export const remove = (mongo: HapiMongo, id: string) =>
  mongo.db.collection('ToDo_list').deleteOne({_id: new mongo.ObjectID(id)})

export const search = (mongo: HapiMongo, query: string) =>
  mongo.db
    .collection('ToDo_list')
    .find({description: {$regex: new RegExp(query, 'i')}})
    .toArray()
