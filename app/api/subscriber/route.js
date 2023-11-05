import { NextResponse } from "next/server"
import connectMongoDb from "@/lib/mongo/mongodb"
import Subscriber from "@/models/subscriber"
import {transporter, mailOptions} from "@/lib/sendEmail/nodemailer"

export async function POST(request) {
    const {email} = await request.json()
    if (!email) {
        return NextResponse.json({message: "Set email to subscribe."}, { status:500})
    }
    await connectMongoDb()
    const subscriber = await Subscriber.findOne({email})
    
    if(subscriber) {
        return NextResponse.json({message: "Email is already subscribed!"}, { status:409})
    }

    try {
        const options = mailOptions(email)
        await transporter.sendMail(options)
    } catch (error) {
        console.log(error);
    }

    await Subscriber.create({email})
    return NextResponse.json({message: "Subscription Successful!"}, { status:201})
}