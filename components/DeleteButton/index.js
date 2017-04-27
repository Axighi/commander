export default ({ onClick, id }) => {
  const handleClick = () => onClick(id);
  return <button onClick={handleClick}>X</button>;
};
