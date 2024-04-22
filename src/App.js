import { useState } from "react";
import twitter from "./img/twiiter.gif";
import "./App.css";
import attackontitansgif from "./img/attakontitansgif.gif"; // Corrected import name
import downCafe from "./img/downcafe.jpg"; // Corrected import name
import gh from "./img/gh.jpg"; // Corrected import name
import catwoman from "./img/catwoman.gif";
import elmoDancing from "./img/elmoDancing.gif";
function App() {
	const [stage, setStage] = useState(0);
	const [buttonSelection, setButtonSelection] = useState(null);
	const [noButtonPosition, setNoButtonPosition] = useState({
		top: "0",
		left: "0",
	});
	const [ghSecondQuestion, setGhSecondQuestion] = useState(false);
	const handleNoButtonClick = () => {
		const randomTop = `${Math.random() * 170 + 100}%`; // Random top position between 10% and 90%
		const randomLeft = `${Math.random() * 170 + 100}%`; // Random left position between 10% and 90%
		setNoButtonPosition({ top: randomTop, left: randomLeft });
	};
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="h-[80%] w-[90%] rounded border-slate-800 relative border flex items-center justify-center">
				<div
					className="absolute  opacity-0 h-full w-full z-0 flex gap-10 transition-all justify-center text-white items-center flex-col"
					style={
						stage === 0
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${elmoDancing})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}
							: {}
					}
				>
					<p className="text-6xl text-center">Soy rara?</p>
					<p className="text-4xl text-center">
						Test cientificamente comprobado
					</p>
					<button
						className="text-3xl w-1/2 px-4 py-2 cursor-pointer text-black bg-yellow-300 rounded-sm"
						onClick={() => {
							setStage(1);
							setTimeout(() => setStage(2), 2000);
						}}
					>
						Continuar
					</button>
				</div>
				<div
					className="absolute top-40 opacity-0 h-1/2 flex gap-10 z-0 transition-all items-center flex-col"
					style={stage === 1 ? { opacity: "1", zIndex: "100" } : {}}
				>
					<p className="text-5xl text-center mx-40">
						Responderas algunas preguntas que definiran si eres rara
						o no...
					</p>
				</div>
				<div
					className="absolute  opacity-0 h-full w-full flex gap-10 z-0 transition-all justify-center  items-center flex-col"
					style={
						stage === 2
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${attackontitansgif})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}
							: {}
					}
				>
					<p className="absolute text-white top-10 left-10">
						el unico q conocia
					</p>
					<p className="text-5xl text-center text-white mx-40">
						Te gusta el anime?
					</p>
					<div className="flex gap-5">
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-lime-500"
							style={
								buttonSelection
									? { transform: "scale(1.2)" }
									: {}
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(3);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							Si
						</button>
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-red-500"
							style={
								buttonSelection
									? { opacity: "0" }
									: { opacity: "1" }
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(3);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							No
						</button>
					</div>
				</div>
				<div
					className="absolute  opacity-0 h-full w-full flex gap-10 z-0 transition-all justify-center items-center flex-col"
					style={
						stage === 3
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${downCafe})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}
							: {}
					}
				>
					<p
						className="absolute text-white text-2xl opacity-0 top-10 right-10 transition-all "
						style={{ opacity: `${buttonSelection ? "1" : "0"}` }}
					>
						bien de croto
					</p>
					<p className="text-5xl text-center text-white mx-40">
						Tomas cafe torrado??
					</p>
					<div className="flex gap-5">
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-lime-500"
							style={
								buttonSelection
									? { transform: "scale(1.5)" }
									: {}
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(4);
									setButtonSelection(false);
									setNoButtonPosition({ top: 0, left: 0 });
								}, 2000);
							}}
						>
							Si
						</button>
						<button
							className="text-3xl w-40 px-4 py-2 relative bg-yellow-300 transition-all rounded-sm hover:bg-red-500"
							style={{
								opacity: buttonSelection ? "0" : "1",
								top: noButtonPosition.top,
								left: noButtonPosition.left,
							}}
							onClick={() => {
								setNoButtonPosition({ top: 0, left: 0 });
								handleNoButtonClick();
							}}
						>
							No
						</button>
					</div>
				</div>
				<div
					className="absolute  opacity-0 h-full w-full flex gap-10 z-0 transition-all justify-center  items-center flex-col"
					style={
						stage === 4
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${gh})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}
							: {}
					}
				>
					<p className="text-5xl text-center text-white opacity-1 mx-40 transition-all">
						{ghSecondQuestion
							? "Todo el dia?"
							: "Miras Gran Hermano??"}
					</p>
					<div className="flex gap-5">
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-lime-500"
							style={
								buttonSelection
									? { transform: "scale(1.5)" }
									: {}
							}
							onClick={() => {
								if (ghSecondQuestion) {
									setButtonSelection(true);
									setTimeout(() => {
										setStage(5);
										setButtonSelection(false);
									}, 2000);
									setTimeout(() => {
										setStage(6);
									}, 4000);
									setTimeout(() => {
										setStage(7);
									}, 6000);
								} else {
									setGhSecondQuestion(true);
								}
							}}
						>
							Si
						</button>
						<button
							className="text-3xl w-40 px-4 py-2 relative bg-yellow-300 transition-all rounded-sm hover:bg-red-500"
							style={{
								opacity: buttonSelection ? "0" : "1",
								top: noButtonPosition.top,
								left: noButtonPosition.left,
							}}
							onClick={() => {
								if (ghSecondQuestion) {
									setNoButtonPosition({ top: 0, left: 0 });
									handleNoButtonClick();
								} else {
									setButtonSelection(true);
									setTimeout(() => {
										setGhSecondQuestion(true);
										setButtonSelection(false);
									}, 1000);
								}
							}}
						>
							No
						</button>
					</div>
				</div>
				<div
					className="absolute top-40 opacity-0 h-1/2 flex gap-10 z-0 transition-all items-center flex-col"
					style={stage === 5 ? { opacity: "1", zIndex: "100" } : {}}
				>
					<p className="text-5xl text-center mx-40">
						Estas mal eu...
					</p>
				</div>
				<div
					className="absolute top-40 opacity-0 h-1/2 flex gap-10 z-0 transition-all items-center flex-col"
					style={stage === 6 ? { opacity: "1", zIndex: "100" } : {}}
				>
					<p className="text-5xl text-center mx-40">
						Sigamos con las ultimas
					</p>
				</div>
				<div
					className="absolute  opacity-0 h-full w-full flex gap-10 z-0 transition-all justify-center  items-center flex-col"
					style={
						stage === 7
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${catwoman})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}
							: {}
					}
				>
					<p className="absolute text-white top-10 left-10">vos</p>
					<p className="text-5xl text-center text-white mx-40">
						Hablas mas con tus gatos que con personas reales??
					</p>
					<div className="flex gap-5">
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-lime-500"
							style={
								buttonSelection
									? { transform: "scale(1.2)" }
									: {}
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(8);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							Si
						</button>
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-red-500"
							style={
								buttonSelection
									? { opacity: "0" }
									: { opacity: "1" }
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(8);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							No
						</button>
					</div>
				</div>
				<div
					className="absolute  opacity-0 h-full w-full flex gap-10 z-0 transition-all justify-center  items-center flex-col"
					style={
						stage === 8
							? {
									opacity: "1",
									zIndex: "100",
									backgroundImage: `url(${twitter})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}
							: {}
					}
				>
					<p className="absolute text-white top-10 left-10">vos</p>
					<p className="text-5xl text-center text-white mx-40">
						Tu tiempo libre se basa en usar twiter y pelearte con
						gente teniendo como nombre de usuario user1939842391??
					</p>
					<div className="flex gap-5">
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-lime-500"
							style={
								buttonSelection
									? { transform: "scale(1.2)" }
									: {}
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(9);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							Si
						</button>
						<button
							className="text-3xl w-40 px-4 py-2 cursor-pointer bg-yellow-300 transition-all rounded-sm hover:bg-red-500"
							style={
								buttonSelection
									? { opacity: "0" }
									: { opacity: "1" }
							}
							onClick={() => {
								setButtonSelection(true);
								setTimeout(() => {
									setStage(9);
									setButtonSelection(false);
								}, 2000);
							}}
						>
							No
						</button>
					</div>
				</div>
				<div
					className="absolute top-40 opacity-0 h-1/2 flex gap-10 z-0 transition-all items-center flex-col"
					style={stage === 9 ? { opacity: "1", zIndex: "100" } : {}}
				>
					<p className="text-5xl text-center mx-40">
						Habiendo respondido todas las preguntas positivamente,
						la conclusion, cientifica, es q sos
					</p>
					<p
						className="text-7xl opacity-0 text-center mx-40"
						style={{
							animation: "fade-in 1s forwards",
						}}
					>
						✨Rara✨
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
