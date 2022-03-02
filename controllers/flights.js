
import res from 'express/lib/response.js'
import { Flight } from '../models/flights.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res) {
  console.log(req.body)
  if (req.body.departs === '') delete req.body.departs
  const flight = new Flight(req.body)
  console.log(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    console.log(error)
    res.render("flights/index", {
      error, 
      flights,
      title: 'All Flights',
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/shows', {
      title: 'Flight Detail',
      flight,
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
}