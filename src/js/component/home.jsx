import React, { useState } from "react";


//create your first component

const Home = () => {
	const [nameList, setNameList] = useState([]);


	const handleEnter = async (e) => {

		if (e.keyCode === 13) {
			let secondName = nameList;
			secondName.push(e.target.value)
			setNameList([...secondName])
		}
	}
	const handleDelete = (e) => {
		let secondName = nameList;
		secondName.splice(e.target.id, 1)
		setNameList([...secondName]);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-header">
							<h1>To Do List</h1>
						</div>
						<div className="card-body">
							<input type="text" className="input" onKeyUp={(e) => handleEnter(e)} placeholder="What´s needs to be done" style={{ color: "black" }} />
							<ul className="lista">{nameList.map((name, index) => <li key={index}>{name} <button className="button" onClick={(e) => handleDelete(e)} id={index}>X</button></li>)}</ul>
						</div>

						<footer className="blockquote-footer"> {nameList.length}</footer>

					</div>
				</div>
			</div>
		</div>

	)
};




export default Home;