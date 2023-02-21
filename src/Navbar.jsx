import { useState } from 'react';

function Navbar() {
	const [search, setSearch] = useState('');

	return (
		<div className="search-nav">
			<form action="submit">
				<label htmlFor="search-bar">
					<h1>Spin</h1>
					<img
						className="search-nav-logo"
						src="/lottery.png"
						alt=""
					/>
				</label>
				<input
					id="search-bar"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					className="search-bar"
					type="text"
					placeholder="Movies"
				/>
				<button className="search-button">Search</button>
			</form>
		</div>
	);
}

export default Navbar;
