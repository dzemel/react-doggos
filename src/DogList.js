import { Link } from "react-router-dom";

function DogList({dogs}) {
  return <div className="DogList">
    {dogs.map(d => {
      return <div>
        <img src={d.src}/>
        <Link to={`/dogs/${d.name}`}>{d.name}</Link>
        </div>
    })}
  </div>;
}

export default DogList;
