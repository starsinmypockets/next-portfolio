import axios from "axios"
import { useState, createRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact() {
  const [resMsg, setResMsg] = useState()
  const [capcha, setCapcha] = useState()

  return (
    <div
      id="contact"
      className="p-8 justify-center items-center min-h-screen bg-skyline bg-bottom bg-cover bg-opacity-20"
    >
      <h2 className="text-4xl md:text-white p-6">Contact</h2>
      <p className="text-xl md:text-white pl-6">
        Please reach out and I will reply as soon as possible.
      </p>

      <form
        id="contact-form"
        onSubmit={async (e) => {
          e.preventDefault()
          console.log("CAPCHA", capcha)
          const body = {
            capcha: capcha
          }
          const formData = new FormData(e.target)
          formData.forEach((value, key) => (body[key] = value))
          try {
            const res = await axios.post(
              "http://dev.pjwalker.net:3002/send",
              body,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            console.log(res)

            document.getElementById("contact-form").reset()
            
            if (res.data && res.data.msg == "spam") {
              setResMsg("Sorry -- this message fails our spam filter -- please try again later.")
            }

            if (res.data && res.data.msg == "fail") { 
              setResMsg(
                "Sorry! There was an error submitting your message. Try contacting me via email at pjwalker76@gmail.com"
              )
            }

            if (res.data && res.data.msg == "success") {
              setResMsg(
                "Your message was sent. I will be in touch with you soon!"
              )
            }
          } catch (err) {
            console.log("Error submitting contact form", err)
            setResMsg(
              "Sorry! There was an error submitting your message. Try contacting me via email at pjwalker76@gmail.com"
            )
          }
        }}
      >
        <div className="w-full">
          <input
            className="bg-gray-200 shadow-inner rounded-l m-2 p-2 w-full md:w-4/12"
            id="email"
            type="email"
            name="email"
            aria-label="email address"
            placeholder="Enter your email address"
          />
        </div>
        <div className="w-full">
          <input
            className="bg-gray-200 shadow-inner rounded-l m-2 p-2 w-full md:w-4/12"
            id="name"
            type="name"
            name="name"
            aria-label="Your name"
            placeholder="Enter you name"
          />
        </div>
        <div className="w-full">
          <input
            className="bg-gray-200 shadow-inner rounded-l m-2 p-2 w-full md:w-4/12"
            id="title"
            type="text"
            name="title"
            aria-label="title"
            placeholder="Message title"
          />
        </div>
        <div className="w-full">
          <textarea
            className="bg-gray-200 shadow-inner rounded-l m-2 p-2 w-full mt-4 md:w-4/12"
            id="message"
            type="textarea"
            name="message"
            rows="6"
            cols="60"
            aria-label="message body"
            placeholder="Type your message"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeS5wsaAAAAAD8QKYKrt2QELVNLbDJxnG1SarCh"
          onChange={setCapcha}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
          type="submit"
        >
          Submit
        </button>
      </form>
      {resMsg && (
        <p className="mt-6">
          <span className="text-2xl p-2 bg-gray-300">{resMsg}</span>
        </p>
      )}
    </div>
  )
}
