const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  transport.verify((error, success) => {
    if (error) {
        console.error("SMTP Connection Error:", error);
    } 
});


const sendEmail=async (req,res)=>{
    const {name,email,msg}=req.body;
    if( !email || !name || !msg){
        return res.status(400).json({message: 'All fileds are required'})
    }
    try{
        await transport.sendMail({
            from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
            to: 'kumarreddy9110@gmail.com',
            subject: 'Regarding Portfolio App',
            html: `
                <h5>Detail Information</h5>
                <ul>
                <li><p>Name: ${name} </p></li>
                <li><p>Email: ${email} </p></li>
                <li><p>Message: ${msg} </p></li>
                </ul>
            `
        })
         return res.status(200).json({
            success:true,
            message:"Your Message sent successfully"
        })
    }catch(error){
      console.log(error)
      return res.status(404).send({message:'send Email Api erorr'})  
    }
}

module.exports={sendEmail}