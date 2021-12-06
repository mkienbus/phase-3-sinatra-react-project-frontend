
import React from "react"

function ContinentIdTable(){
    return(
    <table id = "table">
      <tbody>
        <tr>
          <th>Continent</th>
          <th>Continent ID</th>
        </tr>
        <tr>
          <td>North America</td>
          <td>1</td>
        </tr>
        <tr>
          <td>South America</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Africa</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Europe</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Asia</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Oceania</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Antarctica</td>
          <td>7</td> 
        </tr>
      </tbody>
    </table>
    )
}

export default ContinentIdTable;