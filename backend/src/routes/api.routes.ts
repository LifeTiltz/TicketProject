import express from 'express'
import cors from 'cors'
import { newsController } from '../news/controllers/news-controller'
import { ordersController } from '../orders/controllers/orders-controller'
import { userController, productsController } from '../controllers'
import { authenticateJWT } from '../middlewares/Authorization'
import { loginController } from '../login/controllers/login-controller'

const router = express.Router()

router.use(cors())
router.use(express.json())

router.post('/register', userController.register)
router.post('/login', loginController.login)
router.get('/news', newsController.get)

router.use(authenticateJWT)

router.put('/users/:userId', userController.put)

router.get('/products/:userId', productsController.getById)
router.get('/products', productsController.get)

router.get('/orders', ordersController.get)

export default router
