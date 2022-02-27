
import res from 'express/lib/response'
import { Flight } from '../models/flights.js'

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
   //what does this do and do I need it?
}

const flight = new Flight(req.body)
flight.save(function(err) {
  if (err) return res.redirect('/flights/new')
  res.redirect('/flights/new')
})

export {
  newFlight as new,
  create
}