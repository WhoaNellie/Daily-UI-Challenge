import React, { useState } from "react";

function App() {
  const [selectionState, setSelectionState] = useState({
    "React": false,
    "Webpack": false,
    "Sass": false,
    "Figma": false
  });

  let challenges = [
    {
      num: 1,
      name: "Sign Up Modal",
      tech: ["React", "Webpack", "Sass"],
      url: "./001/index.html",
      repo: "https://github.com/WhoaNellie/UI-Challenges/tree/master/001",
    },
    {
      num: 2,
      name: "Credit Card Checkout",
      tech: ["Figma"],
      mockup: "./002/mockup.png",
      url: "./002/index.html",
    },
  ];

  return (
    <React.Fragment>
      <header>
        <h1>UI Challenge</h1>
        <p>
          Based on the daily prompts from{" "}
          <a href="https://dailyui.co">dailyui.co</a>
        </p>
      </header>
      <main>
        <div className="filters">
          {Object.keys(selectionState).map(e => <FilterButton name={e} selectionState={selectionState} setSelectionState={setSelectionState}/>)}
        </div>
        <ChallengeList selectionState={selectionState} list={challenges}/>
      </main>
    </React.Fragment>
  );
}

function FilterButton({ name, selectionState, setSelectionState }) {
  let idName = name.replace(/\s/g, "").toLowerCase();
  return (
    <React.Fragment>
      <input
        id={idName}
        checked={selectionState[name]}
        onChange={() => setSelectionState({...selectionState, [name] : !selectionState[name]})}
        type="checkbox"
      />
      <label htmlFor="elClass">{name}</label>
    </React.Fragment>
  );
}

function ChallengeList({ selectionState, list }) {
  let searchState = Object.keys(selectionState);
  return (
    <ul>
      {
        list.map(el => {
          let show = true;

          for(let i = 0; i < searchState.length; i++){
            if(selectionState[searchState[i]] && !el.tech.includes(searchState[i])){
              show = false;
            }
          }

          if(show){
            return(
            <li className={el.tech.join(" ") + " challenge"} key={el.num}>
              <a href={el.url}>{el.name}</a>
              {el.repo && (
                <React.Fragment>
                  (<a href={el.repo}>Source</a>)
                </React.Fragment>
              )}
              {el.mockup && (
                <React.Fragment>
                  (<a href={el.mockup}>Mockup</a>)
                </React.Fragment>
              )}
            </li>)
          }
        })
      }
    </ul>
        
  );
}

export default App;
