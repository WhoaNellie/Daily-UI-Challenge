import React from "react";

function App() {
  let challenges = [
    {
      num: 1,
      name: "Sign Up Modal",
      tech: ["react", "webpack", "sass"],
      page: "./001/index.html",
      repo: "https://github.com/WhoaNellie/UI-Challenges/tree/master/001",
    },
    {
      num: 2,
      name: "Credit Card Checkout",
      tech: ["figma"],
      mockup: "./002/mockup.png",
      page: "./002/index.html"
    },
  ];

  return (
    <React.Fragment>
      <header>
        <h1>UI Challenge</h1>
        <p>
          Based on the daily prompts from <a href="dailyui.co">dailyui.co</a>
        </p>
      </header>
      <main>
          <div className="filters">
            <button>React.js</button>
            <button>Webpack</button>
            <button>Sass</button>
            <button>Figma</button>
          </div>
            
        <ChallengeList data={challenges}/>
      </main>
    </React.Fragment>
  );
}

function ChallengeList({ data }){
    return (
        <ul>
            {data.map(el => (
                <li className={el.tech.join(' ')}  key={el.num}>
                    <a href={el.url}>{el.name}</a> {(el.repo && <React.Fragment>(<a href={el.repo}>Source</a>)</React.Fragment>)}
                </li>
            ))}
        </ul>
    )
}


export default App;
