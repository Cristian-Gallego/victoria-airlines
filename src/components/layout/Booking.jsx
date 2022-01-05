import BookingFrom from './BookingFrom';
import BookingTo from './BookingTo';

function Booking() {
	return (
		<section>
			<div className="booking-container">
				<form className="booking">
					<div className="locations">
						<BookingFrom />
						<BookingTo />
					</div>
					<div className="dates">
						<label htmlFor="departure">
							<input
								className="departure-date"
								type="date"
								name="departure"
								placeholder="Departure Date"
							/>
						</label>
						<label htmlFor="return">
							<input
								className="departure-date"
								type="date"
								name="return"
								placeholder="Return Date"
							/>
						</label>
					</div>
					<div className="lower-row">
						<div className="options">
							<div className="one-way">
								<input type="checkbox" name="one-way" />
								<label htmlFor="one-way">One-way</label>
							</div>

							<div className="use-miles">
								<input type="checkbox" name="use-miles" />
								<label htmlFor="use-miles">Use Victoria Miles</label>
							</div>
						</div>
						<input
							type="submit"
							className="search-flights"
							value="Continue"
						></input>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Booking;
