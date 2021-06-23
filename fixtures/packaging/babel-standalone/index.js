const App = () => {
  const [count, setCount] = React.useState(0);

  return <div onClick={() => setCount(count + 1)}>{count}</div>;
};

ReactDOM.render(<App />, document.getElementById('container'));
