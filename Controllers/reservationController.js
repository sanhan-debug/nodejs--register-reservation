import { reservationModel, userModel } from "../Models/model.js"

const createReservation = async (req, res) => {
    const { date, time, numberOfPeople } = req.body
    // const { email } = req.user

    try {

        // const user = await userModel.find({ email })

        await reservationModel.create({
            date,
            time,
            numberOfPeople,
            createdBy: req.user.id
        })

        res.status(200).send("rezervasiya ugurla tamamlandi!").status(200)



    } catch (error) {
        console.error(error)
        res.status(400).send("bad request")
    }
}

const userReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find()
        res.status(200).send(reservations)
    } catch (error) {
        console.error(error)
        res.status(400).send("bad request")
    }
}

const getIdReservations = async (req, res) => {
    const { id } = req.params
    try {
        const reservation = await reservationModel.findById(id)
        res.send(reservation).status(200)
    } catch (error) {
        console.error(error)
        res.status(400).send("bad request")
    }
}

const deleteReservation = async (req, res) => {
    const { id } = req.params
    try {
        await reservationModel.findByIdAndDelete(id)
        res.send("reservation has been deleted").status(200)
    } catch (error) {
        console.error(error)
        res.status(400).send("bad request")
    }
}


export { createReservation, userReservations, getIdReservations, deleteReservation }