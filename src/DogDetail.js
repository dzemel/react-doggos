import { useParams } from "react-router-dom";

function DogDetail(props) {
  const { dogs } = props;
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name === name);
  return (
    <div>
      <h1>{dog.name}</h1>
      <h1>
        {dog.name} is {dog.age} years old
      </h1>
      <img src={dog.src} />
      {dog.facts.map((fact) => (
        <p>{fact}</p>
      ))}
    </div>
  );
}

export default DogDetail;
