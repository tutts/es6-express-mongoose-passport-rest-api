import path from 'path'

const env = process.env.NODE_ENV || 'production'
const config = require(`./${env}`) // eslint-disable-line import/no-dynamic-require

export default {
  root: path.join(__dirname, '/..'),
  ...config,
}
