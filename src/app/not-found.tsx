import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex w-screen h-screen items-center justify-center py-24 sm:py-32 lg:py-40">
      <div className="flex flex-col items-center text-center">
        <p className="bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-6xl md:text-9xl">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-black font-poppinsMedium">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-black/60 font-robotoRegular">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="p-4 text-lg font-semibold text-primary transition hover:text-black/70 font-poppinsMedium"
        >
          Go to the home page
        </Link>
        <p className="text-lg font-semibold font-poppinsMedium">Or</p>
        <Link
          href="/contact"
          className="p-4 text-lg font-semibold text-primary transition hover:text-black/70 font-poppinsMedium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
