import Joi from 'joi'

export default {
  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      email: Joi.string().email(),
    },
    params: {
      userId: Joi.string().hex().required(),
    },
  },
}
