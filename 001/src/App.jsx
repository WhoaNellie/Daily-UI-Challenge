import React from 'react';

function App(){
 return(
     <React.Fragment>
         <header>
             <h1>Mushnik</h1>
             <h2>Home of the World's most fabulous plant, Audrey II!</h2>
         </header>
         <main>
             <div className="audrey2">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Little_Shop_of_Horrors_at_Grafton_High_School_07.jpg"/>
             </div>
            
            <p>Found during a total eclipse of the sun on sale for $1.95, Audrey II is now the most famous plan in the world. Until now, our propritary growing method has been kept a secret, but now you too may grow your own Audrey 3, 4, 5... as many as you please!</p>

            <h3>Sign up to recieve a free clipping of the world's largest Flytrap, Audrey II!</h3>

            <div className="buttons">
            <button>Sign Up</button>
            <button>Return Clipping</button>
            </div>

         </main>
     </React.Fragment>
 )
}

export default App;