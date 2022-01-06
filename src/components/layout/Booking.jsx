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
						<div>
							<label htmlFor="departure">Departure date:</label>
							<input
								className="departure-date"
								type="date"
								name="departure"
								placeholder="Departure Date"
							/>
						</div>
						<div>
							<label htmlFor="return">Return date:</label>
							<input
								className="departure-date"
								type="date"
								name="return"
								placeholder="Return Date"
							/>
						</div>
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
						<input type="submit" className="btn-md" value="Continue"></input>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Booking;
