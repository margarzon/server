const express = require('express')

//crear el objeto express

const app = express()

//url de prueba

app.get('/prueba', (req, res)=>{
    //EJEMPLO DE RESPONNSE BASICO
    res.send("Hola")
})

//uri de bootcamps
app.get (('/bootcamps'),
        (req, res)=> {
            return res.json({
                succes: true,
                msg: "seleccionanco todos los bootcamps"
            })
        })

//2. seleccionar el bootcamp
// cuyo id de pase por parametro

app.get ('/bootcamps/:id',
        (req , res) => {
        bootcampId = req.params.id
        return res.json({
            succes : true,
            msg :`seleccionando bootcamp cuyo id es: ${bootcampId}`
        }
        )
        })

//3. crear un bootcamps
app.post (('/bootcamps'),
(req, res)=> {
    return res.json({
        succes: true,
        msg: "seleccionanco todos los bootcamps"
    })
})

//4. actualizar bootcamp por id

app.put ('/bootcamps/:id',
        (req , res) => {
        bootcampId = req.params.id
        return res.json({
            succes : true,
            msg :`actualizando bootcamp cuyo id es: ${bootcampId}`
        }
        )
        })
//4. eliminar

app.delete ('/bootcamps/:id',
        (req , res) => {
        bootcampId = req.params.id
        return res.json({
            succes : true,
            msg :`eliminando bootcamp cuyo id es: ${bootcampId}`
        }
        )
        })

//Ruta del recurso cursos

//Obtener todos los cursos
app.get( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los cursos"
    })
})

//Obtener el curso por id
app.get( '/api/v1/devcamp/cursos/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo cursos con id ${ request.params.id }` 
    })
})

//Crear curso
app.post( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando curso"
    })
})

//Actualizar curso
app.put( '/api/v1/devcamp/cursos/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando curso con id ${ request.params.id }`
    })
})
//Eliminar curso
app.delete( '/api/v1/devcamp/cursos/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando curso con id ${ request.params.id }`
    })
})

//Ruta del recurso reseñas

//Obtener todos las reseñas de un bootcamp
app.get( '/api/v1/devcamp/review/bootcamp', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos las reseñas de un bootcamp"
    })
})
//Obtener todos las reseñas
app.get( '/api/v1/devcamp/review', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  "Aqui van a mostrarse todos las reseñas"
    })
})

//Crear reseña
app.post( '/api/v1/devcamp/review', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando reseña"
    })
})

//Actualizar reseña
app.put( '/api/v1/devcamp/review/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando reseña con id ${ request.params.id }`
    })
})

//Eliminar reseña
app.delete( '/api/v1/devcamp/review/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `eliminar reseña con id ${ request.params.id }`
    })
})

//Ruta del recurso usuario

//Obtener todos los usuarios
app.get( '/api/v1/devcamp/usuarios', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los usuarios"
    })
})

//Obtener usuario por id
app.get( '/api/v1/devcamp/usuarios/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Aqui van a mostrarse el usuario por id ${ request.params.id }` 
    })
})

//Crear usuario
app.post( '/api/v1/devcamp/usuarios', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando usuario"
    })
})

//Actualizar usuario
app.put( '/api/v1/devcamp/usuarios/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando usuario con id ${ request.params.id }`
    })
})

//Eliminar usuario
app.delete( '/api/v1/devcamp/usuarios/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando usuario con id ${ request.params.id }`
    })
})



        
//definir puerto de servidor

const PUERTO = 4500

app.listen(PUERTO ,
           console.log(`servidor ejecutando en puerto en ${PUERTO}`))