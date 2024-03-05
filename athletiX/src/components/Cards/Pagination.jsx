const Pagination = ({ itemsPerPage, items, paginado, currentPage }) => {
    const pageNumbers = [];
  
    for(let i = 0; i < Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i + 1);
    }
    
    return (
      <div className="pagination flex">
        <nav>
          <ul className="flex">
            {pageNumbers.map(number => (
              <>
              <li key={number} className="list-none m-3 bg-indigo-600 cursor-pointer rounded-full w-6 text-center h5 font-medium">
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Pagination;