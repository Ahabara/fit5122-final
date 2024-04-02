import Game from "./Game.tsx";

export function GamePage() {
    return <section className="bg-gradient-to-b from-myBlack to-purple-900 text-amber-50 mx-auto px-12 py-8" id="game">
        <p className="text-6xl text-amber-50 max-w-lg pt-8">Ready To <span
            className="bg-myPurple px-2">Test</span> Your Knowledge?</p>
        <h1 className="text-2xl mb-8">Drag and Drop Game</h1>
        {/*<StartGame/>*/}
        <Game/>
    </section>;
}