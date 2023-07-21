import StatCount from "./StatCount";
import StatIcon from "./StatIcon";

function StatCard(){
    return(
        <div className="flex justify-items-center items-center p-16">
            <StatIcon/>
            <StatCount/>
        </div>
    );
}

export default StatCard;