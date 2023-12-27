import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import '../../styles/index.css'

//create your first component
const Home = () => {
    return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
			<div>
				<h2 style={{ color: 'white' }}>SPELLCAST CHEAT</h2>
			</div>
			<div className="board">
				<div className="small-square">
					<div className="row mt-2">
						<div className="col ms-2">
							<div className="tile">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
						</div>
	
						<div className="col">
							<div className="tile">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
						</div>
	
						<div className="col">
							<div className="tile">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
						</div>
	
						<div className="col">
							<div className="tile">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
						</div>
	
						<div className="col me-2">
							<div className="tile">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
							<div className="tile mt-2">A</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};	

export default Home;
