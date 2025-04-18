import Navigation from "../components/Navigation";

export default function Home() {
  const date = new Date();
  return (
    <div className="flex flex-col justify-between bg-amber-50 w-full h-screen">
      {/* NAVIGATION BAR AND MENU */}
      <nav>
        <Navigation></Navigation>
      </nav>

      {/* MAIN CONTENT SECTION */}
      <section className="w-full pt-10 flex flex-col justify-center  px-4">
        {/* HERO TITLE  */}
        <div className="w-full">
          <h1 className="text-4xl text-center">
            Hi I'am{" "}
            <span className="font-playfair italic font-semibold text-gray-500">
              Talha Abdurehman
            </span>{" "}
            a full-stack developer from{" "}
            <span className="font-playfair italic font-semibold text-gray-500">
              Pakistan
            </span>
            .
          </h1>
        </div>
      </section>

      <section className="w-full pt-10 flex flex-col justify-center  px-4">
        <div className="pt-6  flex justify-between items-center">
          <h1 className="text-sm">
            /Folio: <span className="font-semibold ">01</span>
          </h1>

          <h1 className="text-sm">
            /Availability: <span className="font-semibold ">2025</span>
          </h1>
        </div>
        <div className="pb-6 flex justify-between items-center">
          <h1 className="text-sm">
            /Contact:{" "}
            <span className="font-semibold">talhakyle124@gmail.com</span>{" "}
          </h1>

          <h1 className="text-sm">
            /Copyright:{" "}
            <span className="font-semibold">@{date.getFullYear()}</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
