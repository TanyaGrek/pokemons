import React, { Component } from 'react'


class Pokemon extends Component {

    selectPokemon = () => {
        const selectPokemons = this.props.name;
        this.props.selectedPokemon(selectPokemons)
    };

    addStar = () => {
        const addStar = this.props.pokemon;
        this.props.addStar(addStar);
    };

    render(){
            return (
                <div key={this.props.name} className="pokemonItem">
                    <a href="#" onClick={this.selectPokemon}>
                        <div className="pokemonItemName">{this.props.name}</div>
                    </a>
                    <input
                        id={"pokemon-" + this.props.name}
                        className="starInput"
                        type="checkbox"
                        onChange={this.addStar}
                        checked={this.props.checked}
                    />
                    <label htmlFor={"pokemon-" + this.props.name} className={this.props.checked + "star"}/>
                </div>

            )
        }

}

export default Pokemon;