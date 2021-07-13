import { selectContinents } from '.'


export class continentsDispatcher {
    
    dispatchContinents(dispatch) {
        
        fetch('https://countries.trevorblades.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `{continents{
                    name
                    code
                    countries{
                    code
                    name
                    capital
                    currency
                    emoji
                    phone
                    languages {
                        name
                  }
                }
              }}`})
        })
            .then(response => response.json())
            .then(json => {
                dispatch(selectContinents(json.data))
            })

    }

}

export default new continentsDispatcher()



