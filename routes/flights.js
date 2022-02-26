import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

router.get('/new', flightsCtrl.new)

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}

