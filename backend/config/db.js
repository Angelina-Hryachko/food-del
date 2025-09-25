import mongoose from 'mongoose'

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://l2565312:iEDWwrrnJvfvv6xC@cluster0.rlcuigf.mongodb.net/del_food_project')
        .then(() => {
            console.log('DB Connected')
        })
}