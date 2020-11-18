import React from 'react';

class Modal extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
    }
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  // component is about about to mount, setting loading state variable to true
  // componentWillMount() {
  //   this.setState({ isLoading: true });
  // }


  // once the compoenent is fully mounted, lets toggle loading back to false
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: false });
  //   }, 1000);
  // }

  render() {
    if (this.state.open) {
      return (
        <div>
          <button onClick={this.handleToggle}>Close Me</button>
          {this.state.isLoading ? <p>...loading</p> : this.props.children}
        </div>
      );
    } else {
      return (
        <button onClick={this.handleToggle}>Open Modal</button>
      );
    }
  }

}

export default Modal;
