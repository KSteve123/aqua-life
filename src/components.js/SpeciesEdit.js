import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditSpecies = () => {
	let navigate = useNavigate();

	const { name } = useParams();

	const [Species, setSpecies] = useState({
		id:"",
		Name:"",
		water_temp:"",
		ph_level:"",
        tank_size:"",
        behaviour:"",
        diet:"",
		
	});
	const {
		
		id,
        Name=name,
        water_temp,
        ph_level,
        tank_size,
        behaviour,
        diet

	} = Species;

    

	useEffect(() => {
		loadSpecies();
	}, []);

	const loadSpecies = async () => {
		const result = await axios.get(
			`http://localhost:8080/survival/${name}`
		);
		setSpecies(result.data);
	};

	const handleInputChange = (e) => {
		setSpecies({
			...Species,
			[e.target.name]: e.target.value,
		});
	};
	const updateSpecies = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/survival/update/${name}`,
			Species
		);
		navigate("/Speciesinfo");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Species</h2>
			<form onSubmit={(e) => updateSpecies(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="Name">
						Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Water Temperature
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="water_temp"
						id="water_temp"
						required
						value={water_temp}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						PH Level
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="payment1"
						id="email1"
						required
						value={ph_level}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/SpeciesInfo"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditSpecies;