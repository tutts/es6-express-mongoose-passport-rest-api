import express from 'express'
import validate from 'express-validation'
import paramValidation from './user.validations'
import userCtrl from '../../controllers/user.controller'
import authCtrl from '../../controllers/auth.controller'

const router = express.Router() // eslint-disable-line new-cap

router.route('/') /** GET /api/users - Get list of users */.get(userCtrl.list)

router
  .route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(authCtrl.checkAuth, userCtrl.get)
  /** PUT /api/users/:userId - Update user */
  .put(validate(paramValidation.updateUser), userCtrl.update)
  /** DELETE /api/users/:userId - Delete user */
  .delete(userCtrl.remove)

/** Load user when API with userId route parameter is hit */
// router.param('userId', userCtrl.load) - might not need this anymore because of cookies

export default router
