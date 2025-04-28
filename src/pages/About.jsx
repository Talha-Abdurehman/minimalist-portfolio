import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <main className="bg-black w-full px-4 py-10 flex flex-col justify-center gap-4">
        <div>
          <h1 className="font-playfair text-amber-50 text-4xl">
            ABOUT<br></br>
            <span className="italic">ME</span>
          </h1>
        </div>

        <div>
          <p className="font-sans text-xl font-light text-amber-50">
            I am a dedicated MERN Stack developer specializing in building
            elegant, minimalist, and visually compelling web experiences. With a
            strong emphasis on performance, aesthetics, and fluid animations.
          </p>
        </div>
      </main>
    </>
  );
}
