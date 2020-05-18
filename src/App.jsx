import React from "react";

function App() {
  let challenges = [
    {
      num: 1,
      name: "Sign Up Modal",
      tech: ["react", "webpack", "sass"],
      url: "./001/index.html",
      repo: "https://github.com/WhoaNellie/UI-Challenges/tree/master/001",
    },
    {
      num: 2,
      name: "Credit Card Checkout",
      tech: ["figma"],
      mockup: "./002/mockup.png",
      url: "./002/index.html"
    },
  ];

  let techList = ["React", "Webpack", "Sass", "Figma", "Vue"];

  return (
    <React.Fragment>
      <header>
        <h1>UI Challenge</h1>
        <p>
          Based on the daily prompts from <a href="https://dailyui.co">dailyui.co</a>
        </p>
      </header>
      <main>
        <FilterButtons list={techList} filter={() => console.log("hi")}/>    
        <ChallengeList data={challenges}/>
      </main>
    </React.Fragment>
  );
}

function FilterButtons({ list, filter }){
  return(<div className="filters">
    {list.map(el => (
      <button id={el.replace(/\s/g, '').toLowerCase()} onClick={filter}>{el}</button>
    ))}
  </div>)
}

function ChallengeList({ data }){
    return (
        <ul>
            {data.map(el => (
                <li className={el.tech.join(' ')}  key={el.num}>
                    <a href={el.url}>{el.name}</a> 
                    {(el.repo && <React.Fragment>(<a href={el.repo}>Source</a>)</React.Fragment>)}
                    {(el.mockup && <React.Fragment>(<a href={el.mockup}>Mockup</a>)</React.Fragment>)}
                </li>
            ))}
        </ul>
    )
}


export default App;
