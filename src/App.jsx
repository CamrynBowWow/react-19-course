import { useState } from 'react';
import './App.css';

const Card = ({ title }) => {
	const [hasLiked, setHasLiked] = useState(false);

	return (
		<div className='card'>
			<h2>{title}</h2>

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
