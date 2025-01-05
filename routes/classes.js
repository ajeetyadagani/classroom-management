const express=require('express');
const router=express.Router();
const {createClass,getClasses,enrollStudent}=require('../controllers/classController');

router.post('/' ,createClass);
router.get('/', getClasses);
router.post('/:classId/enroll',enrollStudent);

module.exports=router;
