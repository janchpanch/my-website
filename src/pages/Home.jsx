import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <h3 className="font-bold">TODO</h3>
      <ol>
        <li>Create specialized per page</li>
        <li>Explore GitHub REST API usage to pull commits to display for changelog</li>
        
        
      </ol>
    </div>
  )
}

export default Home
