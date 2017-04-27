import { Editor, EditorState } from "draft-js";
import NoSSR from "react-no-ssr";
import io from "socket.io-client";

import TextEditor from "../components/TextEditor/index";
import ActionEmitter from "../components/ActionEmitter/index";
import DeleteButton from "../components/DeleteButton/index";

const styles = {
  root: {
    display: "flex",
    width: "100vw"
  },
  actionList: {
    flex: 1,
    border: "1px solid #ccc",
    margin: "20px"
  }
};

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      actions: [{ type: "speak", payload: {} }]
    };
  }

  componentDidMount() {
    this.socket = io(
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://ws-server-mhnpavohst.now.sh/"
    );
  }

  componentWillUnmount() {
    this.socket.off("message", this.handleMessage);
    this.socket.close();
  }

  createAction = action => {
    console.log(action);
    if (this.state.actions.some(e => e.type === action.type)) {
      alert(`action ${action.type} exists!`);
      return;
    }
    this.setState({ actions: this.state.actions.concat([action]) });
  };

  emitAction = action => {
    this.socket.emit("message", JSON.stringify(action));
  };

  deleteAction = actionId => {
    console.log(actionId);
    this.setState({
      actions: this.state.actions.filter(e => e.type !== actionId)
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <NoSSR>
          <TextEditor createAction={this.createAction} />
        </NoSSR>
        <div style={styles.actionList}>
          {this.state.actions.map((action, index) => (
            <div key={index}>
              <ActionEmitter clickCb={this.emitAction} action={action} />
              <DeleteButton onClick={this.deleteAction} id={action.type}>
                X
              </DeleteButton>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
