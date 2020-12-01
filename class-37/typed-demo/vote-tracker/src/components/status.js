import React from 'react';
import Flag from '../images/flag.png';
import { connect } from 'react-redux'; // this function connects our component to the features within our redux store

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

function Status(props) {

  let currentLeader = { name: '', votes: 0 }

  let leader = props.candidates.reduce((winning, candidate) => {
    let isWinning = candidate.votes > winning.votes ? candidate : winning;
    return isWinning
  }, currentLeader);

  return (
    <Container>
      <img src={Flag} />
      <Typography>Current Leader: {leader.name ? leader.name : 'none'}</Typography>
      <Typography>Total Number of Votes: {props.totalVotes}</Typography>
      <Divider />
    </Container>
  )
}

// data from our store that we want to display
const mapStateToProps = (store) => {
  return {
    totalVotes: store.votes.totalVotes,
    candidates: store.candidates,
  }
}

export default connect(mapStateToProps)(Status);
