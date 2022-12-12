import React, { Component } from "react";
import OnlyRow from "../onlyRow";


class Main extends Component {
  state = {
  };

  render() {
    const {arr,selectedGener, dele,like,pick,getMovieCount, tableHeader, activePage,pagevied,number,number2,activeChange,}=this.props;
    return (
   <React.Fragment>
      
        


<table className="table table-striped table-dark">
      <thead>
            <tr>
            {tableHeader.map((val,index) => {
              return (
                    <th scope="col" style={{ color: "red" }} key={index}>{val}</th>
                     );
              }
              )
              }
           </tr>
     </thead>
     
          {arr.map((val, index) => {
            if (
              val.gener == selectedGener ||
              selectedGener == "All"
            ) {
              return (
                <OnlyRow
                  key={val.id}
                  number={val.number}
                  name={val.name}
                  id={val.id}
                  gener={val.gener}
                  count={val.c}
                  liked={val.liked}
                  dele={() => dele(val.id)}
                  like={() => like(val.id)}
                  img={val.img}
                />
              );
            } else return;
          }
          )}
</table>

        
      </React.Fragment>
    );
  }


}
export default Main;



