import React from "react"
import PropTypes from "prop-types"
class Helloworld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greetings: {this.props.greetings}
      </React.Fragment>
    );
  }
}

Helloworld.propTypes = {
  greetings: PropTypes.string
};
export default Helloworld
