import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import * as VoteActions from '../store/votes/votes-actions.js';

function VoteCounter(props) {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Candidate</TableCell>
            <TableCell>Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.candidates.map((candidate, idx) => {
            // return <p onClick={() => props.increment(candidate)}>Name: {candidate.name} votes: {candidate.votes}</p>
            return (
              <TableRow key={idx} onClick={() => props.increment(candidate)}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.votes}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => {
  return {
    candidates: state.candidates,
  }
}

const mapDispatchToProps = {
  increment: VoteActions.increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteCounter);
