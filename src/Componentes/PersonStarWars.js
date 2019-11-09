import axios from 'axios';
import React from 'react';
import '../Componentes/Main.css';

export default class PersonStarWars extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            name: ""
        }
        this.getPersons = this.getPersons.bind(this)
    }
   
    getPersons(){
        return axios.get("https://swapi.co/api/people")
        .then((response) => {
            console.log(response.data.results)
            this.setState({ persons: response.data.results })
        })
    }

    componentDidMount(){
        this.getPersons()
    }

    handleChange = event =>{
        this.setState({name: event.targe.value})
    }

     handleSubmit = async event => {
         console.log(this.state.texto)
         event.preventDefault();
         const infoPerson = {
            name: this.state.name
         }
     }
    render(){
        const persons = this.state.persons;
        return(

            <div className="main">
                <div className="texts">
                    <h3>Star Wars</h3>
                    <p>May the force be with you</p>
                </div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Person Name:
                    <input onInput={(e) => this.setState({texto: e.target.value})} type="text" className="userInput" name="name" onChange={this.getPersons} />
                    </label>
                    <button type="submit">Search</button>
                    </form>
                </div>
                {persons.map((p, index) => {
                    console.log(p)
                return(
                    <div key={index }>
                        <p>{p.name}</p>
                    </div>
                )
                })
                }
            </div>
        );
    }
}

