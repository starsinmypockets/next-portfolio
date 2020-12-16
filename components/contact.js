export default function Contact() {
  return (
    <div id="contact" className="p-8 justify-center items-center h-screen mt-24 bg-skyline bg-bottom bg-cover bg-opacity-20">
      <h2 className="text-4xl mb-4">Contact</h2>
        <form onSubmit={(e) => {
              console.log(e)
              })
            }}
          >
          <div className="w-full">
            <input
              className="bg-gray-200 shadow-inner rounded-l p-2 w-full md:w-4/12"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full">
            <textarea
              className="bg-gray-200 shadow-inner rounded-l p-2 w-full mt-4 md:w-4/12"
              id="message"
              type="textarea"
              rows="6"
              cols="60"
              aria-label="message body"
              placeholder="Type your message"
            />
          </div>
          <input type="hidden" name="to" value="pjwalker76@gmail.com" />
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
