import React from "react";
import "./styles.css";

export default function App() {
  return <Article />
};


function Article() {
  return (<article className="article">
  <h2 className="article__title">Headline</h2>
  <input id="connected" type="text"></input>
  <label htmlFor="connected"></label>
  <a className="article__link" href="https://de.wikipedia.org/wiki/React">Reade Me</a>
</article>);
}