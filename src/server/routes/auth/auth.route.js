import express from 'express'
import validate from 'express-validation'
import passport from 'passport'
import paramValidation from './auth.validations'
import authCtrl from '../../controllers/auth.controller'

const router = express.Router() // eslint-disable-line new-cap

router.route('/me').get(authCtrl.me)
router.route('/login').post(validate(paramValidation.login), passport.authenticate('local'), authCtrl.login)
router.route('/register').post(validate(paramValidation.register), authCtrl.register)

export default router
