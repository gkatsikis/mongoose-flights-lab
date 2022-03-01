import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

router.get("/", flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)
/* GET users listing. */
router.delete("/:id", flightsCtrl.delete)

router.get('/:id', flightsCtrl.show)

export {
  router
}

