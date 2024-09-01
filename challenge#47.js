//What is wrong with using async/await in a useEffect hook in reference to the below code snippet?

function TestComponent() {
  const [data, setData] = useState([]);
 useEffect(() => {
	const fetchData = async () => {
  	const response = await fetch("/api/data");
  	const json = await response.json();
  	setData(json);
	};
	fetchData();
  }, []);
   return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}

//if the component un-mounts before async call finsihes, react tries to set state for an un-mounted component,which may later cause memory issues
//to avoid use abortcontroller when component unmount or use some Flag when component unmounts