import React from 'react';


// React instiates this context, we need to export it so that child components can import and subscribes
export const ThemeContext = React.createContext();

// This component needs to wrap everything
class Theme extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
      toggleMode: this.toggleMode
    }
  }

  toggleMode = () => {
    this.setState({ mode: this.state.mode === 'dark' ? 'light' : 'dark' });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme;
