import {Editor, EditorState} from 'draft-js'
import NoSSR from 'react-no-ssr'

import TextEditor from '../components/TextEditor/index'
import ActionEmitter from '../components/ActionEmitter/index'

const styles = {
  root: {
    display: 'flex',
    width: '100vw'
  },
  actionList: {
    flex: 1,
    border: '1px solid #ccc',
    margin: '20px'
  }
}

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      actions: [
        {type: 'speak', payload: {}}
      ]
    }
  }

  createAction = (action) => {
    console.log(action)
    this.setState({actions: this.state.actions.concat([action])})
  }

  emitAction = (action) => {
    console.log(JSON.stringify(action))
  }

  render() {
    return (
      <div style={styles.root}>
        <NoSSR>
          <TextEditor createAction={this.createAction} />
        </NoSSR>
        <div style={styles.actionList}>
          {this.state.actions.map((action, index) =>
            <ActionEmitter key={index} clickCb={this.emitAction} action={action} />
          )}
        </div>
      </div>
    )
  }
}

export default Index