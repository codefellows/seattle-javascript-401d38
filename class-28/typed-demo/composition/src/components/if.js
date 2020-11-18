// conditionally render its chilren


function If(props) {

  let { children, condition } = props;

  if (condition) {
    return children;
  } else {
    return null;
  }

}

export default If;
