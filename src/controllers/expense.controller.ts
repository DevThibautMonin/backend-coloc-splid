import { RequestHandler } from 'express'
import expenseModel from '../models/expense.model'

export const getExpenses: RequestHandler = async (req, res, next) => {
  const expenses = await expenseModel.find()
  res.status(200).json(expenses)
}

export const createExpense: RequestHandler = async (req, res, next) => {
  const expense = await expenseModel.create({
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date
  })

  res.status(201).json({ message: "New expense has been created.", expense: expense })
}

export const updateExpense: RequestHandler = async (req, res, next) => {

}

export const deleteExpense: RequestHandler = async (req, res, next) => {

}