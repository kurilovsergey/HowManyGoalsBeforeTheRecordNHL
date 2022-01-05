import React from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

//код взят со стороннего ресурса

export class Flip extends React.Component {
  constructor(props) {
    super(props);
    this._tickRef = React.createRef();
  }

  componentDidMount() {
    const { value } = this.props;
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value
    });
    Tick.count.down("2021");
  }

  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value;
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  render() {
    return (
      <span ref={this._tickRef} className="tick">
        <span data-repeat="true" aria-hidden="true">
          <span data-view="flip">Tick</span>
        </span>
      </span>
    );
  }
}
