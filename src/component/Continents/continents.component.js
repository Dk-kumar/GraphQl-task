import React, { Component } from 'react'

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
            <select onChange={(event) => { dropDownSelectedValue(event) }}>
                {this.props.apiData.continentsData.continents.map(data => {
                    return (
                        <option id="seleced-value" key={data.code} value={data.name}>
                            {data.name}
                        </option>
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
                <table>
                    <thead>
                        <tr>
                            <th>
                                Countries
                            </th>
                            <th> Countries code </th>
                            <th> Capital </th>
                            <th> Currency </th>
                            <th> Flag </th>
                        </tr>
                    </thead>
                    {countries[0].countries.map((data, i) => {
                        return (
                            <tbody>
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>{data.capital}</td>
                                    <td>{data.currency}</td>
                                    <td>{data.emoji}</td>
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
                {this.dropDownContinents()}
                {this.continentDetails()}
            </>
        );
    }
}

export default Continents;