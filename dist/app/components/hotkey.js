import {Component} from "../../../web_modules/preact.js";
import isEmpty2 from "../../../web_modules/lodash/isEmpty.js";
import difference2 from "../../../web_modules/lodash/difference.js";
import isEqual2 from "../../../web_modules/lodash/isEqual.js";
export default class HotKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: [],
      eventsBuffer: []
    };
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  componentDidMount() {
    window.document.addEventListener("keydown", this.onKeyPress);
  }
  componentWillUnmount() {
    window.document.removeEventListener("keydown", this.onKeyPress);
  }
  onKeyPress(e) {
    const {keys, onKeysCoincide, simultaneous} = this.props;
    const {buffer, eventsBuffer} = this.state;
    const key = e && e.key && e.key.toLowerCase() || null;
    const maxLength = keys.length;
    let newBuffer = [];
    let newEventsBuffer = [];
    if (key) {
      if (buffer.length >= maxLength) {
        newBuffer = buffer.slice(1).concat(key);
        newEventsBuffer = eventsBuffer.slice(1).concat(e);
      } else {
        newBuffer = buffer.concat(key);
        newEventsBuffer = eventsBuffer.concat(e);
      }
    }
    const isKeySetEmpty = !maxLength || maxLength === 0;
    const areKeysPressedTogether = simultaneous && isEmpty2(difference2(keys, newBuffer));
    const areKeysPressedSequently = !simultaneous && isEqual2(keys, newBuffer);
    if (!isKeySetEmpty) {
      if (areKeysPressedTogether || areKeysPressedSequently) {
        onKeysCoincide(newBuffer, newEventsBuffer);
        this.setState({
          buffer: [],
          eventsBuffer: []
        });
      } else {
        this.setState({
          buffer: newBuffer,
          eventsBuffer: newEventsBuffer
        });
      }
    }
  }
  render() {
    return null;
  }
}
