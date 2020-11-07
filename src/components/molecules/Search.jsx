/* eslint-disable react-hooks/exhaustive-deps */
// React Libraries
import React, { useEffect, useState } from 'react';
import { objectMultiFilter } from '../../js/functions/filterFunction';
import { objectSort } from '../../js/functions/sorterFunctions';

function Search({ parcelArray, setParcelArray, sortFunction }) {
  const [searchState, setSearchState] = useState({
    searchTerm: ''
  });

  useEffect(() => {
    const filteredArray = objectMultiFilter(
      parcelArray,
      'parcel_id',
      'sender',
      searchState.searchTerm
    );
    /* This delay can be increased to allow the user to finish typing before  
       filtering the results. Might be useful if used in conjunction with API call.*/
    const delay = setTimeout(() => {
      const sortedArray = objectSort(filteredArray, 'parcel_id');
      setParcelArray(sortedArray);
      sortFunction({ parcel_id: 'down' });
    }, 10);
    /*  Clears the timeout before next useEffect runs */
    return () => clearTimeout(delay);
  }, [searchState]);

  const inputHandler = e => {
    const searchString = e.target.value;
    setSearchState({ searchTerm: searchString });
  };

  return (
    <div className="find">
      <input
        onChange={inputHandler}
        type="text"
        autoComplete="off"
        className="live-search-field"
        placeholder="Find a parcel..."
      />
    </div>
  );
}

export default Search;
