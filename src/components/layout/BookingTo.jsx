import { useState } from 'react';

function BookingTo() {
	const [suggestions, setSuggestions] = useState([]);
	const [text, setText] = useState('');

	const cities = [
		'Barcelona, BCN',
		'Madrid, MAD',
		'Palma de Mallorca, PMI',
		'Malaga, AGP',
		'Alicante, ALC',
		'Gran Canaria, LPA',
		'Tenerife, TFS',
		'Ibiza, IBZ',
		'Lanzarote, ACE',
		'Valencia, VLC',
	];

	const onTextChange = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`${value}`, 'i');
			suggestions = cities.sort().filter((v) => regex.test(v));
		}
		setSuggestions(suggestions);
		setText(value);
	};

	const suggestionsSelected = (text) => {
		setSuggestions([]);
		setText(text);
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul>
				{suggestions.map((city) => (
					<li key={city} onClick={() => suggestionsSelected(city)}>
						{city}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="booking-to">
			<label htmlFor="to">To: </label>
			<div className="booking-to-box">
				<input
					type="text"
					name="to"
					placeholder="To"
					value={text}
					onChange={onTextChange}
					autoComplete="off"
				/>
				<hr />
				{renderSuggestions()}
			</div>
		</div>
	);
}

export default BookingTo;
