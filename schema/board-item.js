import mongoose from "mongoose";

const boardItemSchema = new mongoose.Schema({
    pulseId: {
        type: Number,
        required: true,
    },
    pulseName: {
        type: String,
        required: false,
    },
    email: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
    },
    numbers: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    person: {
        type: String,
        required: false,
    },
    status: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
    }
})


const BoardItem = mongoose.model('Board', boardItemSchema);

export default BoardItem;