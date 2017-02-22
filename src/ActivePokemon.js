import React, { Component } from 'react'

class ActivePokemon extends Component {
    render () {
        if (!this.props.listFromParent) {
            return (
                <div>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                    <span className="ddy">Loading...</span>
                </div>
                );
    } else {
            return (
                <div className="activePokemon col-xs-12 col-sm-6 col-md-7 col-lg-7">
                    <div className="activePokemonName col-sm-12">
                        <div className="pokemonName">{this.props.listFromParent.name}</div>
                        <div className="pokemonId">id#{this.props.listFromParent.id}</div>
                    </div>
                    <div className="pokemonImage col-sm-12">
                        <div className="pokemonImageBoys col-sm-6"><h3>Boys</h3>
                        <img alt={this.props.listFromParent.name}
                             src={this.props.listFromParent.sprites.front_default}/>
                        <img alt={this.props.listFromParent.name}
                             src={this.props.listFromParent.sprites.back_default}/>
                        </div>
                        <div className="pokemonImageGirl col-sm-6"><h3>Girls</h3>
                        {(this.props.listFromParent.sprites.front_female == null) ? <div className="noGirls">no girls</div> :
                            <img alt={this.props.listFromParent.name + ' girl'}
                                 src={this.props.listFromParent.sprites.front_female}/>
                        }
                            {(this.props.listFromParent.sprites.back_female == null) ? '':
                            <img alt={this.props.listFromParent.name + ' girl'}
                                 src={this.props.listFromParent.sprites.back_female}/>
                        }
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="pokemonType col-md-6">
                            <div><h3>Types</h3></div>
                            <div className="types">
                                {this.props.types.map(type =>
                                    <div key={type.type.name} className={type.type.name + "Type"}>{type.type.name}</div>
                                )}
                            </div>
                        </div>
                        <div className="pokemonAbility col-md-6">
                            <div><h3>Abilities</h3></div>
                            {this.props.abilities.map(ability =>
                                <div key={ability.ability.name}>{ability.ability.name}</div>
                            )}
                        </div>
                    </div>
                    <div className="pokemonStat col-sm-12">
                        <div><h3>Stats</h3></div>
                            {this.props.stats.map(stat =>
                                <div key={stat.stat.name}>
                                    <div key={stat.stat.name}>{stat.stat.name}</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100" style={{width:((stat.base_stat/150)*100)+"%"}}>
                                            {stat.base_stat}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>

            )
        }
    }

}

export default ActivePokemon;