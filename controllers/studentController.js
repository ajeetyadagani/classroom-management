const Student =require('../models/Student');

exports.createStudent=async (req,res)=>{
    const {firstName,lastName,email} =req.body;
    const student=await Student.create({firstName,lastName,email});
    res.status(201).json(student);

};