import { useState } from "react";
import SubLine from "./SubLine";

interface ILineProps {
	title: string;
	isOpen: boolean;
	childs: {
		title: string;
		childs: {
			title: string;
		}[];
	}[];
}
[];

const Line = ({ childs, title, isOpen }: ILineProps) => {
	const [open, setOpen] = useState(isOpen);

	return (
		<div>
			<div
				style={{
					display: "flex",
					width: "400px",
					marginBottom: "21px",
					gap: "10px",
				}}
			>
				<button onClick={() => setOpen((old) => !old)}>+</button>
				<p>{title}</p>
			</div>

			{open &&
				childs.map((element, index) => {
					return (
						<div key={index}>
							<SubLine title={element.title} childs={element.childs} />
						</div>
					);
				})}
		</div>
	);
};

export default Line;
