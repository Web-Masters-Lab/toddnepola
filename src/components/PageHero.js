export const PageHero = () => {
  return (
    <section className="relative h-screen">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        disablepictureinpicture="true"
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src="/videos/pagehero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center p-[5vw] h-full text-center text-white">
        <h1 className="text-5xl font-bold">Current Capital Real estate Group</h1>
        <p className="mt-4 text-lg">
          A boutique real estate investment firm committed to delivering the highest level of
          service in the development, management, and leasing of income producing commercial and
          residential real estate.
        </p>
      </div>
    </section>
  )
}
