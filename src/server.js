import * as sapper from '@sapper/server'
import compression from 'compression'
import polka from 'polka'
import sirv from 'sirv'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

// @ts-ignore
polka()
  .use(
    '/',
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req) => ({
        'user-agent': req.headers['user-agent'],
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
