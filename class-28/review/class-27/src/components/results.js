import React from 'react';
import JSONPretty from 'react-pretty-json';

function Results({ count, results }) {

  const styles = {
    p: {
      width: '500px',
    }
  }

  return (
    <>
      <p>Count {count}</p>
      {/* <p style={styles.p}>
        <JSONPretty id="json-pretty" data={{ "test": "test" }} />
      </p> */}
      <pre>
        {JSON.stringify(results)}
      </pre>
    </>
  )
}

export default Results;
