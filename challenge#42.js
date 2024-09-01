//Find the issue in the below code:
function TestComponent(props) {
    const [count, setCount] = useState(props.initialCount);
    const handleClick = () => {
      setCount(count + 1);
    };
   return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }
// pass setCount as setCount((prevCount)=>prevCount+1) else it take doesn't increment correctly if handleClick fn is called mulitple times from another function