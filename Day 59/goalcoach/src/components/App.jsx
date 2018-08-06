import React, {Component} from 'react';
import {connect} from 'react-redux'
import { firebaseApp } from '../firebase';

import AddGoal from './AddGoal'

import GoalList from './GoalList'


class App extends Component {

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(

            <div style={{margin:'5px'}} >
                <h3>Goal Coach</h3>
                <AddGoal />
                <hr />
                <h4>Goals</h4>
                <GoalList />
                <hr />
                <button 
                className="btn btn-danger"
                onClick={() => this.signOut()}
                >
                Sign Out
                </button>
            </div>
        )
    }

}

function mapStaeToProps(state){
    //console.log('state', state)
    return{}
}

export default connect(mapStaeToProps,null)(App);