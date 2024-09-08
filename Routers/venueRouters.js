import { Router } from "express";
import { createVenue, deleteIdVenue, getIdVenues, getVenues, uptadeIdVenue } from "../Controllers/venueController.js";
import { verifyToken, checkAdmin } from "../Middlewares/authantication.js";

export const venueRouter = new Router()


venueRouter.get('/api/venues',verifyToken,getVenues)
venueRouter.get('/api/venues/:id',getIdVenues)
venueRouter.put('/api/venues/:id',checkAdmin,uptadeIdVenue)
venueRouter.delete('/api/venues/:id',checkAdmin,deleteIdVenue)
venueRouter.post('/api/venues',checkAdmin,createVenue)

