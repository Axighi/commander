import {Editor, EditorState, convertToRaw} from 'draft-js';

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    flex: 3
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 200,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};

const convertObjectToText = obj => obj.blocks.reduce((prev, cur) => prev + cur.text, '')

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.handleClick = () => {
      const obj = convertToRaw(this.state.editorState.getCurrentContent())
      const str = convertObjectToText(obj)
      try {
        const action = JSON.parse(str)
        if (!action.type) {
          alert('Invalid action!')
          return
        }
        this.props.createAction(action)
      } catch (e) {
        alert('Invalid JSON!')
        return
      }
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="input json"
            ref="editor"
          />
        </div>
        <input
          onClick={this.handleClick}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}