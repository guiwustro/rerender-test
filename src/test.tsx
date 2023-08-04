import React from "react";
import "./index.css";
import Line from "./Line";

const Test: React.FC = () => {
	const data = [
		{
			title: "Father",
			isOpen: true,
			childs: [
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
			],
		},
		{
			title: "Fathe2r",
			isOpen: true,
			childs: [
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
				{
					title: "leaf",
					childs: [
						{
							title: "leaf34",
						},
						{
							title: "leaf24",
						},
						{
							title: "leaf43",
						},
					],
				},
			],
		},
	];

	return (
		<div style={{ width: "600px", minHeight: "500px" }}>
			<div>
				<h3>Teste</h3>
				{data.map((element, index) => {
					return (
						<Line
							key={index}
							childs={element.childs}
							title={element.title}
							isOpen={element.isOpen}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Test;
