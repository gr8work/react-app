import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun1",
    autor: "Sheldon Cupper",
    text:
      "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via",
  },
  {
    id: 2,
    title: "Czym jest teoria strun2",
    autor: "Sheldon Cupper",
    text:
      "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via",
  },
  {
    id: 3,
    title: "Czym jest teoria strun3",
    autor: "Sheldon Cupper",
    text:
      "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via",
  },
  {
    id: 4,
    title: "Czym jest teoria strun4",
    autor: "Sheldon Cupper",
    text:
      "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
