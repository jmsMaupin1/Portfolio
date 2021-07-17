import React, { useState, useEffect } from 'react'
import { Grid, Cell } from '../grid';

function Index({board, onClick}) {

    return (
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
                        onClick={() => onClick(index)}
                        color={"#EAEBED"}       
                    >
                        {cell}
                    </Cell>
                ))
            }
        </Grid>  
    )
}

export default Index
