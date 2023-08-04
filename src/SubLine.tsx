import { useState } from "react";

interface ISubLine {
	title: string;
	isOpen?: boolean;
	childs?: {
		title: string;
		isOpen?: boolean;
	}[];
}
const SubLine = ({ title, childs }: ISubLine) => {
	const [isOpen, setIsOpen] = useState(!!true);

	return (
		<div>
			{title}
			<button onClick={() => setIsOpen((old) => !old)}>Open</button>
			{isOpen &&
				childs?.map((element, index) => {
					return <div key={`${index}-teste`}>{element.title}</div>;
				})}
		</div>
	);
};

export default SubLine;
