import React, { Component } from 'react'
import './continents.scss'

/**
 * @class Continents
 */
class Continents extends Component {

    /**
     * returns dropdown list
     * @returns { Dom }
     */
    dropDownContinents() {
        const { dropDownSelectedValue } = this.props

        return (
            <select onChange={(event) => { dropDownSelectedValue(event) } } className='selectDropdown'>
                <option>select continent</option>
                {this.props.apiData.continentsData.continents.map(data => {
                    return (
                        <>
                            <option id="seleced-value" key={data.code} value={data.name}>
                                {data.name}
                            </option>
                        </>
                    )
                })}
            </select>
        )
    }

    continentDetails() {
        const { countries } = this.props

        console.log(countries)
        return (
            (countries.length === 0) ? '' :
                <table className='tableBox'>
                    <thead className='table-head'>
                        <tr>
                            <th>S.No</th>
                            <th>Countries</th>
                            <th> Countries code </th>
                            <th> Capital </th>
                            <th> Currency </th>
                            <th> Phone </th>
                            <th> Flag </th>
                        </tr>
                    </thead>
                    {countries[0].countries.map((data, i) => {
                        return (
                            <tbody className='table-body'>
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>{data.capital}</td>
                                    <td>{data.currency}</td>
                                    <td>{data.phone}</td>
                                    <td className='flagpic'>{data.emoji}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
        )
    }

    render() {
        return (
            <>
                <h1>GraphQl Task</h1>
                <div className='dropdownBox'> 
                    {this.dropDownContinents()}
                </div>
                <div className='table-container'>
                    {this.continentDetails()}
                </div>  
            </>
        );
    }
}

export default Continents;