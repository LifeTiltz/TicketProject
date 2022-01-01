import express from 'express'
import { getSystemStatus } from '../heartbeat/controllers/heartbeat'

const router = express.Router()

router.get('/heartbeat', getSystemStatus)

export default router
