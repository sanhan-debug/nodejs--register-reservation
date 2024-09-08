import { Router } from "express";
import { createReservation, deleteReservation, getIdReservations, userReservations } from "../Controllers/reservationController.js";
import { verifyToken, checkAdmin } from "../Middlewares/authantication.js";


export const reservationRouter = new Router()

reservationRouter.get('/api/reservations',checkAdmin,userReservations)
reservationRouter.get('/api/reservations/:id',getIdReservations)
reservationRouter.delete('/api/reservations/:id',deleteReservation)
reservationRouter.post('/api/reservations',createReservation)