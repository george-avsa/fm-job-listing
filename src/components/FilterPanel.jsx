import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { selectAllFilters } from "./../store/filters/filter-seletors";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "store/filters/filter-actions";

const FilterPanel = () => {
    const filters = useSelector(selectAllFilters);
    const dispatch = useDispatch();

    if (!filters.length) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {filters.map((filter) => (
                        <Badge variant='clearable' key={filter}>
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(resetFilter())}
                >
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
