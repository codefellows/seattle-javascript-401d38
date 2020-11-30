// a function that consumes a component and places values on the components `props`
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import actions from action / reducer files
import { addPeople } from '../store/people-reducer.js'

function PeopleList(props) {
  console.log(props.people);

  return (
    <>
      <h1>Hello from People</h1>
      {/* <ul>
        {props.people.map((person, idx) => <li key={idx}>{person.name}</li>)}
      </ul> */}
      <List component="nav">
        {props.people.map((person, idx) => {
          return (
            <ListItem button>
              <ListItemText primary={person.name} />
            </ListItem>
          )
        })}
      </List>
      <button onClick={() => props.addPeople({ name: 'Adrien', role: 'ta' })}>Update List</button>
    </>
  )
}

// a function to be given to our connect function to our store
// stick our Global Application data onto the props of our current component
const mapStateToProps = state => {
  return {
    people: state.people,
  }
}

// this is a objec containing functions you want to run against your store
// feed your functions into component
const mapDispatchToProps = {
  addPeople,
}

// exports the connected PeopleList 
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
