const nodemailer = require("nodemailer");

// transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, whatsapp, msg } = req.body;
    //validation
    if (!name || !email || !whatsapp || !msg) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    //option
    transporter.sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `${name} messaged via portfolio`,
      html: `
      <html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
    <table
      bgcolor="#fafafa"
      style="
        width: 100% !important;
        height: 100%;
        background-color: #fafafa;
        padding: 20px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial,
          'Lucida Grande', sans-serif;
        font-size: 100%;
        line-height: 1.6;
      "
    >
      <tr>
        <td></td>
        <td
          bgcolor="#FFFFFF"
          style="
            border: 1px solid #eeeeee;
            background-color: #ffffff;
            border-radius: 5px;
            display: block !important;
            max-width: 600px !important;
            margin: 0 auto !important;
            clear: both !important;
          "
        >
          <div
            style="
              padding: 20px;
              max-width: 600px;
              margin: 0 auto;
              display: block;
            "
          >
            <table style="width: 100%">
              <tr>
                <td>
                
                  <h3
                    style="
                      font-weight: 200;
                      font-size: 20px;
                      margin: 15px 0;
                      color: #333333;
                      text-transform: uppercase;
                    "
                  >
                  Message Receieved 
                  </h3>
                  <p
                    style="
                      margin-bottom: 10px;
                      font-weight: normal;
                      font-size: 16px;
                      color: #333333;
                    "
                  >
                    Name: ${name}
                  </p>
                  <h2
                    style="
                      font-weight: 200;
                      font-size: 16px;
                      margin: 20px 0;
                      color: #333333;
                    "
                  >
                    Email: ${email}
                  </h2>
                  <h2
                    style="
                      font-weight: 200;
                      font-size: 16px;
                      margin: 20px 0;
                      color: #333333;
                    "
                  >
                    WhatsApp: ${whatsapp}
                  </h2>
                  <h2
                    style="
                      font-weight: 200;
                      font-size: 16px;
                      margin: 20px 0;
                      color: #333333;
                    "
                  >
                    message: ${msg}
                  </h2>
                  <p
                    style="
                      text-align: center;
                      display: block;
                      padding-top: 20px;
                      font-weight: bold;
                      margin-top: 30px;
                      color: #666666;
                      border-top: 1px solid #dddddd;
                    "
                  >
                    NAND KISHORE PORTFOLIO
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
      
      
      `,
    });
    return res.status(200).send({
      success: true,
      message: "We'll contact you shortly",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { sendEmailController };
