export const SectionHeader = (props) => {
    const { title } = props

    return (
      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-roboto_condensedBold uppercase tracking-tight text-white sm:text-6xl">{title}</h2>
        </div>
      </div>
    )
  }
  