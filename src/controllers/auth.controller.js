import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {nombreCompleto, direccion, edad, telefono, email, fechaNacimiento, rut, password} = req.body;

    try{

        const passwordHash = await bcrypt.hash(password,10) 

        const newUser= new User({
            nombreCompleto,
            direccion,
            edad,
            telefono,
            email,
            fechaNacimiento,
            rut,
            password: passwordHash,
        });
        


        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved.id})
        res.cookie("token", token);
        res.json({
            id: userSaved.id,
            nombreCompleto: userSaved.nombreCompleto,
            direccion: userSaved.direccion,
            edad: userSaved.edad,
            telefono: userSaved.telefono,
            email: userSaved.email,
            fechaNacimiento: userSaved.fechaNacimiento,
            rut: userSaved.rut,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
        })
    }catch(error){
        res.status(500).json({ message: error.message})
    }
};

export const login = async (req, res) => {
    const {rut, password} = req.body;

    try{

       const userFound=  await User.findOne({rut})

        if(!userFound) return res.status(400).json({message: "User not found"})

        const isMatch = await bcrypt.compare(password, userFound.password)
        
        if(!isMatch) return res.status(400).json({message: "Incorrect password"})

       
        const token = await createAccessToken({id: userFound.id})

        res.cookie("token", token);
        res.json({
            id: userFound.id,
            rut: userFound.rut,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
        })
    }catch(error){
        res.status(500).json({ message: error.message})
    }
};

export const logout = (req, res) =>{
    res.cookie("token","",{
        expires: new Date(0),
    })
    return res.sendStatus(200)
}

export const prueba = (req, res) =>{
    res.json("mensaje recibido")
    res.sendStatus(201)
}