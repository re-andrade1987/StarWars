import axios from 'axios';
import React from 'react';
import './Lista.css';

export default class StarWars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
           
           
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        return axios.get("https://swapi.co/api/planets")
            .then(response => response.data.results)
    }

    componentDidMount() {
        const responseInfoPlanets = this.getData('planets');
        responseInfoPlanets.then(planets => {
            console.log(planets)
            this.setState({ planets })
        })
    }

    handleChange = event => {
      
    }

    handleSubmit = event => {
        this.setState({
           
        })
    }

    render() {
    
        return (
        
            <div className="main">
                { this.state.planets.map((item) => {
                    return(
                    <div  key={item.id} className='info'>
                        <div>
                            <h2>Planet name </h2>
                            <strong>{item.name}</strong>
                        </div>
                        <div>
                            <h2>climate</h2>
                            <strong>{item.climate}</strong>
                        </div>
                        <div>
                            <h2>Population of number </h2>
                            <strong>{item.population}</strong>
                        </div>
                        <div>
                            <h2>Terrain </h2>
                            <strong>{item.terrain}</strong>
                        </div>
                    </div>
                    )
                   
                })}
            </div>
        );
    }
}

