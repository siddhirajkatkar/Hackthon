const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const pool=require('../DataBase/db')
const config=require('../util/config')
const jwt=require('jsonwebtoken')
router.post('/register',(req,res)=>{
    const{firstname,lastname,email,password,mobile,birth}=req.body
    const sql ='insert into users (firstname,lastname,email,password,mobile,birth) values(?,?,?,?,?,?)'

    bcrypt.hash(password,10).then((hashpassword)=>{
        pool.query(sql,[firstname,lastname,email,hashpassword,mobile,birth],(error,data)=>{
            if(data){        
            res.send({status:'success' ,data})
            }
            else{
                res.send({status:'error',error})
            }
        })
    })
    .catch((error)=>{
        res.send({status:'error',error:'error at sql query'})
    })
})

router.post('/login',(req,res)=>{
    const {email,password}=req.body
    const sql='select * from users where email=?'
    pool.query(sql,[email],(error,data)=>{
        if(data!=''){
            const user=data[0]
            bcrypt.compare(password,user.password).then((result)=>{
                    if(result){
                        const payload={
                            id:user.id
                        }
                        const token=jwt.sign(payload,config.secret)
                        const body={
                            token:token,
                            firstName:user.firstname,
                            lastname:user.lastname
                        }

                        res.send({status:'success',data:body})
                    }
                    else{
                        res.send({status:'error',error:'wrong password'})
                    }
            })
        }
        else{
            res.send({status:'error',error:'Invalid email Address'})
        }
    })
})

module.exports=router