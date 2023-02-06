import type {Plugin} from '@hapi/hapi'
import routes from './routes'


/**
 * `todo@1.0.0`
 * Recommended route prefix 'api/todo'
 */
export default Object.freeze<Plugin<void>>({
  name: 'todo',
  version: '1.0.0',
  register: server => server.route(routes),
})
