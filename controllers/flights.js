
import res from 'express/lib/response.js'
import { Flight } from '../models/flights.js'
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res) {
  if (req.body.departs === '') delete req.body.departs
  const flight = new Flight(req.body)
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

// function show(req, res) {
//   Flight.findById(req.params.id)
//   .populate('meals')
//   .exec(function (err, flight) {
//     Meal.find({_id: {$nin: flight.meals}}, function (err, meal) {
//       console.log("flight ", flight)
//       console.log("meal: ", meal)
//       res.render("flight/show", {
//         flight: flight,
//         title: "Flight Detail",
//         meal,
//       })
//     })
//   })
// }

function createTicket(req, res) {
  const ticket = req.body
  const id = req.params.id
  Flight.findById(id, function(err, flight) {
  flight.tickets.push(ticket)
  flight.save(function(err) {
    if (err) return res.redirect(`/flights/${id}`)
    res.redirect(`/flights/${id}`)
  })
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.cast.push(req.body.mealId)
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}



export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  createTicket as ticket,
  addToMeals,
}