import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <main className="bg-neutral-900 w-full px-4 py-10 flex flex-col justify-center gap-4 rounded-3xl">
        <div>
          <h1 className="font-playfair text-amber-50 text-5xl">
            ABOUT<br></br>
            <span className="italic">ME</span>
          </h1>
        </div>

        <div>
          <p className="font-sans text-xl font-light text-amber-50">
            I am a dedicated MERN Stack developer specializing in building
            elegant, minimalist, and visually compelling web experiences. With a
            strong emphasis on performance, aesthetics, and fluid animations.
            <br />I craft digital solutions that not only meet business goals
            but also leave a lasting impression. I am passionate about creating
            websites and applications that elevate brands and deliver seamless
            user experiences.
          </p>
        </div>

        <div>
          <img
            src="/talha.jpg"
            loading="lazy"
            alt="Talha image"
            className="rounded-3xl"
          />
        </div>
      </main>
    </>
  );
}
