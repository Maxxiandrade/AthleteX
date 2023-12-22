const Pagination = ({ itemsPerPage, items, paginado, currentPage }) => {
    const pageNumbers = [];
  
    for(let i = 0; i < Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i + 1);
    }
    
    return (
        <div className="pagination flex">
          <nav>
          <ul>
            {pageNumbers.map(number => (
                <li
                  key={number}
                  
                >
                  <a onClick={() => paginado(number)}>{number}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      );
  };
  
  export default Pagination;