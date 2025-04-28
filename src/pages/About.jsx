import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <main className="bg-amber-50 w-full py-10 flex flex-col justify-center">
        <div className="w-screen overflow-hidden bg-amber-50 flex justify-center items-center pl-4">
          <h1 className="font-playfair text-5xl">
            ABOUT<br></br>
            <span className="italic">ME</span>
          </h1>
          <span className="text-black bg-black h-px w-full"></span>
        </div>

        <div></div>
      </main>
    </>
  );
}
