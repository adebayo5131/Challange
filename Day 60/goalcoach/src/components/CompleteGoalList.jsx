import React, { Component } from 'react';

import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })

    })
  }

  

  render() {
    return (
      <div>
       Completed goals
      </div>
    )
  }
}



export default CompleteGoalList;
