import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="sweet-loading">
          <CircleLoader
            size={120}
            color={"blue"}
            loading={this.state.loading}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Spinner;
