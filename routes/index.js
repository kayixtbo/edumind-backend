const express = require('express');
const router = express.Router();

// Controladores
const schoolController = require('../controllers/schoolController');
const classController = require('../controllers/classController');
const feedbackController = require('../controllers/feedbackController');
const professionalController = require('../controllers/professionalController');
const responsibleController = require('../controllers/responsibleController');
const studentController = require('../controllers/studentController');

// Rotas de School
router.post('/schools', schoolController.createSchool); 
router.get('/schools', schoolController.getAllSchools);  
router.get('/schools/:id', schoolController.getSchoolById);  
router.put('/schools/:id', schoolController.updateSchool);  
router.delete('/schools/:id', schoolController.deleteSchool);

// Rotas de Class
router.post('/classes', classController.createClass);
router.get('/classes', classController.getAllClasses);
router.get('/classes/:id', classController.getClassById);
router.put('/classes/:id', classController.updateClass);
router.delete('/classes/:id', classController.deleteClass);

// Rotas de Feedback
router.post('/feedbacks', feedbackController.createFeedback);
router.get('/feedbacks', feedbackController.getAllFeedbacks);
router.get('/feedbacks/:id', feedbackController.getFeedbackById);
router.put('/feedbacks/:id', feedbackController.updateFeedback);
router.delete('/feedbacks/:id', feedbackController.deleteFeedback);

// Rotas de Professional
router.post('/professionals', professionalController.createProfessional);
router.get('/professionals', professionalController.getAllProfessionals);
router.get('/professionals/:id', professionalController.getProfessionalById);
router.put('/professionals/:id', professionalController.updateProfessional);
router.delete('/professionals/:id', professionalController.deleteProfessional);

// Rotas de Responsible
router.post('/responsibles', responsibleController.createResponsible);
router.get('/responsibles', responsibleController.getAllResponsibles);
router.get('/responsibles/:id', responsibleController.getResponsibleById);
router.put('/responsibles/:id', responsibleController.updateResponsible);
router.delete('/responsibles/:id', responsibleController.deleteResponsible);

// Rotas de Student
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;