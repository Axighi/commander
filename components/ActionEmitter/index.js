const ActionEmitter = ({clickCb, action}) => {
  const handleClick = () => clickCb(action)

  return <button style={{
    width: '100%',
    height: '50px',
    fontSize: '20px',
    margin: '5px auto'
  }} onClick={handleClick}>{action.type}</button>
}

export default ActionEmitter