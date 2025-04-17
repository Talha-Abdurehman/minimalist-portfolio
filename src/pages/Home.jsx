import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav>
        <Navigation></Navigation>
      </nav>
      <section className="w-full pt-10 min-h-screen flex justify-center px-4 items-center">
        <div>
          <div className="w-full">
            <h1 className="text-4xl text-center">
              Hi I'am{" "}
              <span className="font-playfair italic font-semibold text-gray-500">
                Talha Abdurehman
              </span>{" "}
              a Full-Stack Developer from{" "}
              <span className="font-playfair italic font-semibold text-gray-500">
                Pakistan
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
