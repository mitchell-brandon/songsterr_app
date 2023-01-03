// import React, { useEffect, useState } from 'react';

interface ResultTableProps{
  searchResults: any;
}

function ResultTable(props:ResultTableProps) {
  let results = props.searchResults;

  console.log(results)
  return(
    <div>
      <ul>
        {
          results.map(({title, index, artist}: any) => {
            return <li key={index}>{artist.name}, {title} </li>;
         })
        }
      </ul>
      
    </div>
  )
};

export default ResultTable;



