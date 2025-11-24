import ChangelogCard from '../components/ChangelogCard'

const Changelog = () => {
  return (
    <article>
      <header>
        <h1>Changelog</h1>
        <p>
          Will eventually use REST API to pull GitHub commit data to display here.
        </p>
      </header>
      <ChangelogCard />
      <ChangelogCard />
    </article>
  )
}

export default Changelog
