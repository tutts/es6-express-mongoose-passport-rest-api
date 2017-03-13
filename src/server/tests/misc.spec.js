import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../index'

describe('## Misc', () => {
  describe('# GET /api/health-check', () => {
    it('should return OK', done => {
      request(app)
        .get('/api/health-check')
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.text).toBe('OK')
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/404', () => {
    it('should return 404 status', done => {
      request(app)
        .get('/api/404')
        .expect(httpStatus.NOT_FOUND)
        .then(res => {
          expect(res.body.message).toBe('Not Found')
          done()
        })
        .catch(done)
    })
  })

  describe('# Error Handling', () => {
    it('should handle mongoose CastError - Cast to ObjectId failed', done => {
      request(app)
        .get('/api/users/56z787zzz67fc')
        .expect(httpStatus.INTERNAL_SERVER_ERROR)
        .then(res => {
          expect(res.body.message).toBe('Internal Server Error')
          done()
        })
        .catch(done)
    })

    // it('should handle express validation error - email is required', done => {
    //   request(app)
    //     .post('/api/users')
    //     .send()
    //     .expect(httpStatus.BAD_REQUEST)
    //     .then(res => {
    //       expect(res.body.message).to.equal('"email" is required')
    //       done()
    //     })
    //     .catch(done)
    // })
  })
})
