"use client";

function Contact() {
  return (
    <div
      className="container mx-auto sm:w-full  pt-[160px] pb-[60px]"
      id="contact"
    >
      <div className="container sm:w-[1440px] mx-auto px-5 sm:px-[150px] flex flex-col justify-center items-center gap-[20px]">
        <div className="w-full flex flex-col justify-center items-center gap-[20px] bg-black-100 rounded-2xl p-8">
          <h1 className="text-[36px] text-white font-bold ">Contact</h1>
          <span className="w-[263px] h-[1px] bg-white"></span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full flex flex-col sm:flex-row gap-[71px] mt-5"
          >
            <div className="w-full flex flex-col gap-[25px]">
              <label>
                <h1 className="text-white mb-4 font-medium">Your Name</h1>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => console.log(e)}
                  placeholder="What's your good name?"
                  className="w-full bg-tertiary01 py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary01 font-medium"
                ></input>
              </label>
              <label>
                <h1 className="text-white mb-4 font-medium">Your Email</h1>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => console.log(e)}
                  placeholder="What's your email address?"
                  className="w-full bg-tertiary01 py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary01 font-medium"
                ></input>
              </label>
            </div>
            {/* col 02 */}
            <div className="w-full flex flex-col gap-[15px]">
              <label>
                <h1 className="text-white mb-4 font-medium">Your Message</h1>
                <textarea
                  name="message"
                  onChange={(e) => console.log(e)}
                  rows={6}
                  placeholder="What do you want to say?"
                  className="w-full bg-tertiary01 py-4 px-6 outline-none rounded-lg text-white placeholder:text-secondary01 font-medium"
                ></textarea>
              </label>

              <button
                type="submit"
                className="sm:ml-auto outline-none cursor-pointer w-full sm:w-[202px] px-[35px] py-[10px] rounded-[10px] font-white font-medium bg-tertiary01 text-white shadow-primary01 shadow-md"
              >
                {"Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
