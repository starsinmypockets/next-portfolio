import axios from "axios"

export default function Contact() {
  return (
    <div
      id="contact"
      className="p-8 justify-center items-center h-screen bg-skyline bg-bottom bg-cover bg-opacity-20"
    >
      <h2 className="text-4xl mb-4">Contact</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const body = {}
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
          } catch (err) {
            console.log("Error submitting contact form", err)
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
        <button
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
