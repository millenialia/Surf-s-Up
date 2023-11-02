import mongoose, {Schema} from "mongoose";

const subscriberSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Set email to subscribe'],
            unique: true,
        },
    }, 
    {
        versionKey: false,
    }
) 

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema)

export default Subscriber