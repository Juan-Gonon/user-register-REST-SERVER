import { Server } from './presentation/server'
import { envs } from './config/envs'
import { AppRouter } from './routers/routes'

(
  () => {
    void main()
  }
)()

async function main (): Promise<void> {
  const server = new Server({ port: envs.PORT, publicPath: envs.PUBLIC_PATH, routes: AppRouter.router })
  await server.start()
}
