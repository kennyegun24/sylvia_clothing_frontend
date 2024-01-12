import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { advFilter, getMaxVal, getMinVal, searchInp } from "../../redux/filter";

const useFilter = () => {
  const [filterPriceMin, setFilterPriceMin] = useState(0);
  const [filterPriceMax, setFilterPriceMax] = useState(100000);
  const [otherFilters, setOtherFilters] = useState();
  const dispatch = useDispatch();

  const changeMin = (e) => {
    setFilterPriceMin(e.target.value);
  };

  const changeMax = (e) => {
    setFilterPriceMax(e.target.value);
  };

  const changeFilter = (e) => {
    setOtherFilters(e.target.value);
  };

  useEffect(() => {
    dispatch(getMinVal(filterPriceMin));
    dispatch(getMaxVal(filterPriceMax));
    dispatch(advFilter(otherFilters));
  }, [filterPriceMin, filterPriceMax, otherFilters, dispatch]);

  return {
    changeMin,
    changeMax,
    changeFilter,
  };
};

export default useFilter;
