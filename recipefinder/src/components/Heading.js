import React, {useContext} from 'react'
import { stateContext,totalHitsContext } from '../App';

const Heading = () => {
    const state = useContext(stateContext);
    let totalHits = useContext(totalHitsContext);
    let intoleranceString = Object.keys(state.intolerances)
    .filter(id => state.intolerances[id])
    .join(', ')
    .replace(/, ([^,]*)$/, ' and $1');
    
    return (
        <div>
            <h2>
                {state.diet === ""? '': state.diet} 
                {state.query=== ""? '': ` ${state.query}s`}
                {intoleranceString.length===0? '': ` with no `+ intoleranceString.toLocaleLowerCase()}
            </h2>
            <h3>
            {state.query===''? "": `${totalHits} results`}
            </h3>
        </div>
    )
}
export default Heading;