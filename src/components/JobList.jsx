import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "./../store/positions/pos-selectors";
import { selectAllFilters } from "./../store/filters/filter-seletors";
import { useSelector } from "react-redux";

const JobList = () => {
    const filters = useSelector(selectAllFilters);
    const jobs = useSelector((state) => selectVisiblePositions(state, filters));

    return (
        <div className='job-list'>
            {jobs.map((item) => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };
