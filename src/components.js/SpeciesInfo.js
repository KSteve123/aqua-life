import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";


const SpeciesView = () => {
	const [Species, setSpecies] = useState([]);
    const [search, setSearch] = useState("");

	useEffect(() => {
		loadSpecies();
	}, []);

	const loadSpecies = async () => {
		const result = await axios.get(
			"http://localhost:8080/survival/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setSpecies(result.data);
           
		
	};

    const handleDelete = async (name) => {
		await axios.delete(
			`http://localhost:8080/survival/delete/${Species.name}`
		);
		loadSpecies();
	};

	

	return (
		<div>
			<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
                        <th>Name</th>
						<th>Water Temperature</th>
						<th>PH Level</th>
						<th>Tank Size</th>
						<th>Behaviour</th>
                        <th>Diet</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
                {Species
						.filter((pt) =>
							pt.name
								.toLowerCase()
								.includes(search)
						)
						.map((Species) => (
							
					
							<tr key={Species.name}>
								
								<td>{Species.id}</td>
								<td>{Species.name}</td>
								<td>{Species.water_temp}</td>
								<td>{Species.ph_level}</td>
                                <td>{Species.tank_size}</td>
                                <td>{Species.behaviour}</td>
                                <td>{Species.diet}</td>
								<td className="mx-2">
									<Link
										to={`/SpeciesEdit/${Species.name}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
                                        onClick={() =>
											handleDelete(Species.name)
										}
										>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
        </section>
		</div>
	);
};

export default SpeciesView;