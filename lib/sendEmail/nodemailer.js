import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
})

export const mailOptions = (email) => {
    const username = email.split('@')[0];
    return {
        from: process.env.EMAIL,
        subject: "Welcome to the Surf’s Up Community!",
        to: email,
        text : "try",
        html : `<p>Dear ${username}, <br/><br/> Thank you for subscribing to Surf's Up Adventures! You’ve just taken the first step towards riding the waves at our meticulously organized surf camps. Our mission is to provide you with an unforgettable surf experience amidst breathtaking locales. <br/><br/> You’ll now be receiving early bird notifications on our upcoming surf camp trips, exclusive offers! <br/> Feel free to catch up with us anytime if you have questions or need assistance in planning your surf adventure. We’re here to ensure you have a seamless journey from shore to surf. <br/><br/> Ride on,<br/><br/> The Surf’s Up Adventures Team</p>`
    }
}