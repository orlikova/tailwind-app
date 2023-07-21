import StatCard from "./StatCard";
import StatCount from "./StatCount";
import StatIcon from "./StatIcon";

function Statistics(){
    return(
        <div className="mb-16">
            <h2 className="text-stone-200 text-5xl font-semibold text-center mb-12">
                Stats
            </h2>
            <div className="flex">
                <StatCard/>
                <StatCard/>
                <StatCard/>

            </div>
        </div>
    );
}

export default Statistics;