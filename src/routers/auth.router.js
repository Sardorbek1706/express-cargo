import { Router } from 'express';
import { register, verifyOtp } from '../controllers/auth.controller.js';
import { validate } from '../middleware/validations.js';
import { loginValidate } from '../validations/auth.validator.js';
import { login } from '../controllers/auth.controller.js';
import { registerValidate } from '../validations/auth.validator.js';
import { profile, createAdmin } from '../controllers/auth.controller.js';
import { authGuard } from '../middleware/authGuard.js';
import { adminValidate } from '../validations/auth.validator.js';
import { loginAdmin } from '../controllers/auth.controller.js';

//    LOGIN
export const loginRouter = Router();
loginRouter.get('/', login.renderLogin)
loginRouter.post('/', validate(loginValidate), login.handleLogin);

//    REGISTER
export const registerRouter = Router();
registerRouter.get('/', register.renderRegister);
registerRouter.post('/', validate(registerValidate), register.handleRegister);

//    PROFILE 
export const profileRouter = Router();
profileRouter.get('/', authGuard, profile);

//    REFRESH TOKENS
// export const refreshRouter = Router()
// refreshRouter.post('/', refreshAccess);

export const verifyRouter = Router()
verifyRouter.post("/", authGuard, verifyOtp)

// REGISTER ADMIN/ CREATE ADMIN
export const adminRouter = Router()
adminRouter.post("/register", validate(adminValidate), createAdmin)
adminRouter.post("/login", validate(loginValidate), loginAdmin)