import { useParams, Link } from "react-router-dom";
import { useFacts } from "../contexts/FactsContext";

const FactsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFacts();

  const fact = data.find((fact) => String(fact.id) === id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  if (!fact) {
    return (
      <div className="notFound">
        <h2>Fact not found</h2>
        <h3>! There are 5 facts only !</h3>
      </div>
    );
  }

  return (
    <div className="facts">
      <h1>{fact.title}</h1>
      <h2>{fact.description}</h2>
    </div>
  );
};

export default FactsPage;
