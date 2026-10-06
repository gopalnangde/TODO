import listModel from "../model/list.model.js";

const getList = async(req,res)=> {
    
}

const createList = (req,res)=>{
    const {title,isComplete} = req.body;
    if(!title || !isComplete){
        return res.status(400).json({
            message:"Please fill all",
        });
    }
    const list = {title,isComplete};
    listModel.create(list);
    res.status(200).json({
        message:"List created in DB",
        list
    });
    console.log(title,isComplete);
}
const deleteList = (req,res)=>{

}

export {getList,deleteList,createList};