import React, { useState } from 'react';
import {Grid, Cell} from '../../components/grid';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''))

  return (
    <div className="App">
      <Grid 
            height={3}
            width={3}
            bgColor={"#34495e"}
            borderColor={"#2c3e50"}
        >
            {
                board.map((cell, index) => (
                    <Cell 
                        key={index}
                        borderColor={"#2c3e50"}
                    >
                        X
                    </Cell>
                ))
            }
        </Grid>
    </div>
  );
}

export default App;
