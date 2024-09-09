import { Router } from "express";

export const pageRouter = new Router()


pageRouter.get('/api/auth/register',(req,res)=>{
    res.render('register')
})

pageRouter.get('/api/auth/login',(req,res)=>{
    res.render('login')
})

pageRouter.get('/api/reservation',(req,res)=>{
    res.render('reservation')
})