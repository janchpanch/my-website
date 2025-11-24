import ChangelogCard from '../components/ChangelogCard'

const Changelog = () => {
  return (
    <div>
      
      <p>
        Will eventually use REST API to pull GitHub commit data to display here.
      </p>
      {/* <h4>10-22-25</h4>
      <p>
        Successfully implemented react router from a tutorial and react-router-dom reinstall fix from StackOverflow. Completed:
        <ul>
          <li>Multipage functionality</li>
          <li>Changelog (scuffed but it exists)</li>
        </ul>
      </p> */}
      <ChangelogCard />
      <ChangelogCard />
    </div>
  )
}

export default Changelog
