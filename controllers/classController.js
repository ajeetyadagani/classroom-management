const Class=require('../models/Class');
exports.createClass=async(req,res)=>{
    const {name,subject,teacherName,startDate,endDate}=req.body;
    const newClass=await Class.create({name,subject,teacherName,startDate,endDate});
    res.status(201).json(newClass);
};
exports.getClasses=async(req,res)=>{
    const classes=await Class.find();
    res.status(200).json(classes);
}; 
exports.enrollStudent=async(req,res)=>{
    const {classId}=req.params;
    const{studentId}=req.body;

    const classObj=await Class.findById(classId);
    classObj.students.push(studentId);
    await classObj.save();

    res.status(200).json(classObj);
};
 
 