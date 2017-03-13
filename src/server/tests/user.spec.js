import mongoose from 'mongoose'
import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../index'

/**
 * root level hooks
 */
afterAll(done => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {}
  mongoose.modelSchemas = {}
  mongoose.connection.close()
  done()
})

describe('## User APIs', () => {
  let user = {
    email: 'samueltutton@gmail.com',
  }

  describe('# POST /api/users', () => {
    it('should create a new user', done => {
      request(app)
        .post('/api/users')
        .send(user)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.email).toBe(user.email)
          user = res.body
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/users/:userId', () => {
    it('should get user details', done => {
      request(app)
        .get(`/api/users/${user._id}`)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.email).toBe(user.email)
          done()
        })
        .catch(done)
    })

    it('should report error with message - Not found, when user does not exists', done => {
      request(app)
        .get('/api/users/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then(res => {
          expect(res.body.message).toBe('Not Found')
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/users/:userId', () => {
    it('should update user details', done => {
      request(app)
        .put(`/api/users/${user._id}`)
        .send({ email: 'samtutton@gmail.com' })
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.email).toBe('samtutton@gmail.com')
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/users/', () => {
    it('should get all users', done => {
      request(app)
        .get('/api/users')
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/users/', () => {
    it('should delete user', done => {
      request(app)
        .delete(`/api/users/${user._id}`)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.email).toBe('samtutton@gmail.com')
          done()
        })
        .catch(done)
    })
  })
})
