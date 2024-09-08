import { userModel, venueModel } from "../Models/model.js"

const createVenue = (req, res) => {
    const { name, location, capacity, description } = req.body
    // const {_id} = req.user

    try {
        if (name && location && capacity && description) {
            venueModel.create({
                name,
                location,
                capacity,
                description,
                createdBy:req.user._id
            })

            res.status(201).send("venue has been added")
        } else {
            res.send("data required").status(400)
        }
    } catch (error) {
        res.status(400).send("bad request")
    }

}

const getVenues = async (req, res) => {

    try {
        const venues = await venueModel.find({})
        res.send(venues).status(200)

    } catch (error) {
        res.status(400)
        console.error("getVenues error")
    }
}

const getIdVenues = async (req, res) => {
    const { id } = req.params
    try {
        const venue = await venueModel.findById(id)
        res.send(venue).status(200)
    } catch (error) {
        console.error("getIdVenues error")
        res.status(400)
    }
}

const uptadeIdVenue = async (req, res) => {
    const { id } = req.params
    const uptadeData = req.body

    try {
        await venueModel.findByIdAndUpdate(id, uptadeData)
        res.status(200).send("venue has been uptaded")
    } catch (error) {
        console.error("uptadeIdVenue error")
        res.status(400)
    }

}

const deleteIdVenue = async (req, res) => {
    const { id } = req.params

    try {
        await venueModel.findByIdAndDelete(id)
        res.send("venue has been deleted").status(200)
    } catch (error) {
        console.error("deleteIdVenue error")
        res.send("There is a problem with the server!").status(400)
    }
}




export { createVenue, getVenues, getIdVenues, uptadeIdVenue, deleteIdVenue }