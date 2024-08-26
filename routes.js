//import express
const express = require('express')
//import userController
const userController = require('./controllers/userController')
//project controller 
const projectController = require('./controllers/projectController')
//jwt middleware
const jwt = require('./middleware/jwtMiddleware')

const multer = require('./middleware/multerMiddleware')

//create object for Router Class 
const router = new express.Router()

//register request 
router.post('/register', userController.registerController)

//login
router.post('/login', userController.loginController)

//add project
router.post('/add-project', jwt, multer.single("projectImg"), projectController.addProjectController)

//get home project
router.get('/home-project', projectController.getHomeProjectController)

//get all project
router.get('/all-project', projectController.getAllProjectController)

//get user project
router.get('/user-project', jwt, projectController.getUserProjectController)

//delete userproject 
router.delete('/remove-userProject/:id',projectController.deleteUserProjectController)

//edit userproject 
router.put('/edit-project/:id',jwt,multer.single('projectImg'),projectController.editUserProjectController)
module.exports = router

//update profile
router.put('/update-profile',jwt,multer.single('profile'),userController.updateProfileController)

module.exports = router