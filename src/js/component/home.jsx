import React from "react";
import Player from "./Player";


const Home = () => {
	return (
		<section className="text-center container bg-dark text-white">

			<section>
				Playlist
			</section>
			<section>
				<Player/>
			</section>

		</section>
	);
};

export default Home;
