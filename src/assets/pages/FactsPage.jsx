import { useParams, Link } from "react-router-dom";

const FactsData = [
  {
    id: 1,
    title: "Best-Selling Album",
    description:
      "His album Thriller (1982) is the best-selling music album in history.",
  },
  {
    id: 2,
    title: "Moonwalk",
    description:
      "He popularized the 'Moonwalk' dance move, which became his signature move in pop culture.",
  },
  {
    id: 3,
    title: "Guinness Records",
    description:
      "Michael holds over 20 Guinness World Records, including 'Most Successful Entertainer of All Time.'",
  },
  {
    id: 4,
    title: "Humanitarian Work",
    description:
      "He supported more than 39 charitable foundations — the most among musicians.",
  },
  {
    id: 5,
    title: "Nose Surgeries",
    description:
      "Jackson underwent several plastic surgeries, especially on his nose, which was often discussed in the media.",
  },
];

const FactsPage = () => {
  const facts = useParams();
  const fact = FactsData.find((fact) => fact.id == facts.id);
  if (!fact) {
    return (
      <div className="notFound">
        <h2>Fact not found</h2>
        <h3>! There are 5 facts only !</h3>
        <Link to={"/"}>Home</Link>
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
