import { Schema, model } from "mongoose";
import validator from 'validator'


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:
        {
            validator: validator.isEmail,
            message: "Email dogru deyil!"
        }
    },
    password: {
        type: String,
        required: true,
        // minLength: 8,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:"user"
    }
}, {
    versionKey: false,
    timestamps: true
})

const venueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    versionKey: false,
    timestamps: true
})

const reservationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    venueId: {
        type: Schema.Types.ObjectId,
        ref: 'venues'
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    numberOfPeople: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export const userModel = model('users', userSchema)
export const venueModel = model('venues', venueSchema)
export const reservationModel = model('reservations', reservationSchema)
