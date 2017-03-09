import React, { Component } from 'react'


class Pokemon extends Component {

    selectPokemon () {
        const selectPokemon = this.props.name;
        return this.props.selectedPokemon(selectPokemon)
    };

    addStar () {
        const addStar = this.props.pokemon;
        this.props.addStar(addStar);
    };

    render(){
            return (
                <div key={this.props.name} className="pokemonItem">
                    <a href="#" onClick={this.selectPokemon.bind(this)}>
                        <div className="pokemonItemName">{this.props.name}</div>
                    </a>
                    <input
                        id={"pokemon-" + this.props.name}
                        className="starInput"
                        type="checkbox"
                        onChange={this.addStar.bind(this)}
                        checked={this.props.checked}
                    />
                    <label htmlFor={"pokemon-" + this.props.name} className={this.props.checked + "star"}/>
                </div>

            )
        }

}

export default Pokemon;