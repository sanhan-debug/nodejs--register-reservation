import { Router } from "express";
import { createVenue, deleteIdVenue, getIdVenues, getVenues, uptadeIdVenue } from "../Controllers/venueController.js";

export const venueRouter = new Router()


venueRouter.get('/api/venues',getVenues)
venueRouter.get('/api/venues/:id',getIdVenues)
venueRouter.put('/api/venues/:id',uptadeIdVenue)
venueRouter.delete('/api/venues/:id',deleteIdVenue)
venueRouter.post('/api/venues',createVenue)

