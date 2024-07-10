const express = require('express')
const router = express.Router()
const { GetAllUserHandler, GetUserById, EnterUser, UpdateUserHandler, deleteUserHandler } = require('../controller/user')
const { GetLogHandler } = require('../middleware/log')


router.get('/', GetAllUserHandler)
router.post('/', EnterUser)
router.get('/user/:mobile/:Password', (GetLogHandler()), GetUserById)
router.put('/update/:id', UpdateUserHandler)
router.delete('/:mobile', deleteUserHandler)

module.exports = router