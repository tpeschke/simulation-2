import React, { Component } from 'react'

import { connect } from 'react-redux'

import { saveName } from '../ducks/reducer'

class AddNewStepOne extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            descrip: ''
        }
    }

    handleName = (e) => {
        this.setState( { name : e } )
    }

    handleDescrip = (e) => {
        this.setState( { descrip : e } )
    }

    saveInput = () => {
        this.props.saveName(this.state.name)
    }

    render() {

        return (
            <div>
                <p>Property Name</p>
                <input 
                placeholder={this.props.housename}
                onChange={e => this.handleName(e.target.value)} />
                <p>Property Description</p>
                <input 
                onChange={e => this.handleDescrip(e.target.value)} />

                <button>Next Step</button>
            </div>
        )
    }
}


//sim 2 43H
function mapStateToProps ( state ) {

    var { housename, description } = state

    //sim 2 43G
    return {
        housename,
        description
    }
}

// sim 2 43E
let actionBuilders = {
    saveName
}


//sim 2 23C
export default connect ( mapStateToProps, actionBuilders) ( AddNewStepOne )