import { Component } from "react";
import Counter from "./counter";


class Counters extends Component {

    render(){
        const { onReset, onDelete, onIncrement, counters } = this.props;

        return (
            
            <>
                <button 
                onClick={() => onReset()}
                className="btn btn-primary btn-sm m-2">
                    Reset
                </button>

               { counters.map(counter => (

               <Counter 
               key={counter.id} 
               onDelete={onDelete}
               onIncrement={onIncrement}
               onReset={onReset}
               counter={counter} 
               value={counter.value} 
               id= {counter.id} /> )
              

            )}

           </>
        );
    }

}
export default Counters;