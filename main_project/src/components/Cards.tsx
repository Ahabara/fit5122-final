import Card from "./Card";

const Cards = () => {
    return (
        <div className={""}>
            <div
                className={"container mx-auto flex space-between gap-12 overflow-x-auto md:overflow-visible -translate-y-32"}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

    );
};

export default Cards;