import React, { useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import '../../styles/index.css'

//create your first component
const Home = () => {
	const inputRefs = Array.from({ length: 25 }, () => useRef(null));

    const handleInputChange = (index, event) => {
        const input = event.target;
        const value = input.value;

		// Convert to uppercase
        const uppercaseValue = value.toUpperCase();

        // Update the input value
        input.value = uppercaseValue;

        // Move to the next input if the current one is filled
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

	const handleClearAll = () => {
        // Clear all input values
        inputRefs.forEach((ref) => {
            if (ref.current) {
                ref.current.value = "";
            }
        });

        // Set focus on the first input
        if (inputRefs[0].current) {
            inputRefs[0].current.focus();
        }
    };

	const handleFindWords = () => {
		
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
			<div>
				<h2 style={{ color: 'white' }}>SPELLCAST CHEAT</h2>
			</div>
			<div className="board">
				<button className="clear-button" onClick={handleClearAll}>Clear All</button>
				<div className="small-square">
					<div className="matrix-container content-center">
						{[...Array(25).keys()].map(index => (
							<input 
								key={index} 
								type="text" 
								className={`matrix-tile number${index + 1}`} 
								maxLength="1" 
								ref={inputRefs[index]}
                                onChange={(event) => handleInputChange(index, event)}
							/>
						))}
					</div>
				</div>
			</div>
			<button className="find-button" onClick={handleFindWords}>Find Words</button>
		</div>
	);
};

export default Home;
