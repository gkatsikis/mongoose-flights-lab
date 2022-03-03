import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  Meal.find({}, function (err, meals) {
    res.render('meals/new', {
      title: "Add Meal",
      meals
    })
  })
}

function create(req, res) {
  Meal.create(req.body, function (err, meals) {
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create,
}