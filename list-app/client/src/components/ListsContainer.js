import React, {
  Component
} from 'react';

import axios from 'axios';

class ListsContainer extends Component {
  constructor() {
    super(props)
    this.state = {
      lists: []
    }
  }
  componentDidMount() {
    axios.get('http://http://localhost:3001/api/v1/lists').then(response => {
      console.log(response)
      this.setState({
        lists: repsonse.data
      })
    }).catch(error => console.log(error))
  }

  render() {
    return ( <
      div className = "Lists-container" >
      ListsContainer <
      /div>
    )
  }
}


export default ListsContainer