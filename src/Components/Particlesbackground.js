import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import Particleconfig from "./particlesconfig";
export default function Particlesbackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			params={Particleconfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}