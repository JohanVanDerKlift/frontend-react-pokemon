import React from 'react';
import './Pagination.css'

function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div className="navigation">
      <button
        className="button"
        onClick={gotoPrevPage}
        disabled={!gotoPrevPage}
      >Vorige</button>
      <button
        className="button"
        onClick={gotoNextPage}
        disabled={!gotoNextPage}
      >Volgende</button>
    </div>
  );
}

export default Pagination;