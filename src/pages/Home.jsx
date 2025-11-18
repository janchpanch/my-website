import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <h3 className="font-bold">TODO</h3>
      <ol>
        <li>Explore tools/platforms that automate styling full stop</li>
        <li>Rebuild this website such that focus can be on backend development</li>
        
        
      </ol>
    </div>
  )
}

export default Home
