import CardList from "../../components/CardList";

const Dashboard = ({ breedInformation, toggleFav }) => {
    return <CardList  breedInformation={breedInformation} toggleFav={toggleFav}/>
}

export default Dashboard;