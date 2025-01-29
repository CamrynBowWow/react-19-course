import { useEffect, useState } from 'react';
import './App.css';

const Card = ({ title }) => {
	const [count, setCount] = useState(0);
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(() => {
		console.log(`${title} has been liked: ${hasLiked}`);
	}, [hasLiked]);

	return (
		<div className='card' onClick={() => setCount(count + 1)}>
			{/* Would be done for more professional code */}
			{/* <div className='card' onClick={() => setCount((prevState) => prevState + 1)}> */}
			<h2>
				{title} <br /> {count || null}
			</h2>

			<button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? 'Liked' : 'Like'}</button>
		</div>
	);
};

const App = () => {
	return (
		<div className='card-container'>
			<h2>Functional Arrow Component </h2>;
			<Card title='Star Wars' />
			<Card title='Avatar' />
		</div>
	);
};

export default App;
