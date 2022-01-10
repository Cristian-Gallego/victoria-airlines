import { useState } from 'react';

function BookingFrom() {
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

	const onKeyPress = (text, e) => {
		if (e.charCode === 13) {
			setSuggestions([]);
			setText(text);
		}
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}

		return (
			<ul>
				{suggestions.map((city) => (
					<li
						key={city}
						onClick={() => suggestionsSelected(city)}
						tabIndex="0"
						onKeyPress={(e) => onKeyPress(city, e)}
					>
						{city}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="booking-from">
			<label htmlFor="from">From: </label>
			<div className="booking-from-box">
				<input
					type="text"
					name="from"
					placeholder="From"
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

export default BookingFrom;
