import Hapi from '@hapi/hapi'

import pluginLogger from './lib/logger'
import pluginAuthBasic from './lib/auth-basic'
import pluginAuthFoo from './lib/auth-foo'
import pluginMongo from './lib/mongo'

import todo from './routes/todo'


/**
 * Initializes the server (starts the caches, finalizes plugin registration) but does not start
 * listening on the connection port ({@link Hapi.Server.initialize more}). Use this to get a server
 * instance for tests ({@link https://hapi.dev/tutorials/testing/?lang=en_US more}).
 *
 * @param port {@link Hapi.ServerOptions.port}
 * @returns singleton instance of server
 */
export default async (options?: Hapi.ServerOptions): Promise<Readonly<Hapi.Server>> => {

  const server = Hapi.server(options)

  await Promise.all([
    server.register(pluginLogger),
    server.register(pluginAuthBasic),
    server.register(pluginMongo),
    server.register(pluginAuthFoo),
  ])

  await Promise.all([
    server.register(todo, {routes: {prefix: '/api/todo'}}),
  ])

  await server.initialize()

  return server
}
