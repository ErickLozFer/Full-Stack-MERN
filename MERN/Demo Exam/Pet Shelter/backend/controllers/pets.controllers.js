import Pets from "../models/pets.model.js";

//CREATE
const createPet = async (req, res) => {
    try{
        let data = req.body;
        let newData = await Pets.create(data);
        res.status(200).json(newData)
    }
    catch(error){
        console.log("Error"+ error.message);
        res.status(400).json({
            message: "Please fill the form correctly"
        })
    }
}

//GET ALL
const getAllPets = async (req, res) => {
    try{
        let list = await Pets.find().sort({petType: 1}).exec();
        res.status(200).json(list)
    }
    catch(error){
        console.log("Error"+ error.message);
        res.status(400).json({
            message: error.message
        })
    }
}