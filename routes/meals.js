import { Router } from 'express'
const router = Router()
import * as mealsCtrl from '../controllers/meals.js'

router.get("/new", mealsCtrl.new)

router.post('/', mealsCtrl.create)

export {
  router
}