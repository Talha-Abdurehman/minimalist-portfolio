import Navigation from "../components/Navigation";

export default function Home() {
  const date = new Date();
  return (
    <div className="flex flex-col justify-between items-center bg-amber-50 w-full h-screen pt-10">
      {/* NAVIGATION BAR AND MENU */}
      <nav></nav>

      {/* MAIN CONTENT SECTION */}
      <section className="w-full flex flex-col justify-center items-center gap-8 px-4">
        {/* HERO TITLE  */}
        <div className="w-full">
          <h1 className="text-3xl text-center">
            Hi I'm{" "}
            <span className="font-playfair italic font-semibold text-gray-500 underline underline-offset-4">
              Talha Abdurehman
            </span>{" "}
            a full-stack developer from{" "}
            <span className="font-playfair italic font-semibold text-gray-500 underline underline-offset-4">
              Pakistan
            </span>
            .
          </h1>
        </div>
        <div className="w-full flex flex-col gap-4">
          <button
            className="cursor-pointer border-2 border-black bg-neutral-900 text-amber-50 rounded-3xl px-10 py-2
          hover:bg-neutral-900 hover:text-amber-50 transition-all duration-300 ease-in-out"
          >
            Hire Me
          </button>
          <button className="cursor-pointer border-2 border-black bg-amber-50 text-neutral-900 rounded-3xl px-10 py-2">
            View Work
          </button>
        </div>
      </section>

      <section className="w-full pb-10 flex flex-col justify-center  px-4">
        <div className="pt-6  flex justify-between items-center">
          <h1 className="text-xs">
            /Folio <br />
            <span className="font-semibold text-xs">01</span>
          </h1>

          <h1 className="text-xs">
            /Availability
            <br /> <span className="font-semibold text-xs ">2025</span>
          </h1>
          <h1 className="text-xs">
            /Contact
            <br />
            <span className="font-semibold text-xs">
              talhakyle124@gmail.com
            </span>{" "}
          </h1>

          <h1 className="text-xs">
            /Copyright
            <br />
            <span className="font-semibold text-xs">@{date.getFullYear()}</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
