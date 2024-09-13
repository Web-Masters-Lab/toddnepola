export const SectionHeader = (props) => {
    const { title } = props

    return (
      <div className="bg-[url('/images/header-background.png')] bg-cover bg-center">
        <div className="bg-primary/30 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-roboto_condensedBold uppercase tracking-tight text-white sm:text-6xl">{title}</h2>
          </div>
        </div>
      </div>
    )
  }
  