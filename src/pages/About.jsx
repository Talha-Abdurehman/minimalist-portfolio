import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <main className="bg-amber-50 w-full px-4 py-10 flex flex-col justify-center gap-2">
        <div>
          <h1 className="font-playfair text-4xl">
            ABOUT<br></br>
            <span className="italic">ME</span>
          </h1>
        </div>

        <div>
          <p>
            I'am a passionate MERN Stack developer with a focus on creating
            products that redfine Web Design .
          </p>
        </div>
      </main>
    </>
  );
}
