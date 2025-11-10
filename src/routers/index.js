import { Router } from 'express';
// import { userRouter } from './user.router.js';
import { blogRouter } from './blog.router.js';
import { BlogController } from '../controllers/blog.controller.js';
// import { postRouter } from './post.router.js';
// import { adminRouter, loginRouter} from './auth.router.js';
// import { registerRouter } from './auth.router.js';
// import { profileRouter, refreshRouter} from "./auth.router.js"
// import {verifyRouter} from "./auth.router.js"

const MainRouter = Router();

// MainRouter.use('/user', userRouter);
MainRouter.use('/home', BlogController.renderHomePage)
MainRouter.use('/about', BlogController.renderAboutPage)
MainRouter.use('/blog', blogRouter);
// MainRouter.use('/post', postRouter);
// MainRouter.use('/login', loginRouter);
// MainRouter.use('/register', registerRouter);
// MainRouter.use('/profile', profileRouter);
// MainRouter.use('/refresh', refreshRouter);
// MainRouter.use("/verify", verifyRouter);
// MainRouter.use('/admin', adminRouter)

export default MainRouter;