import {Pagination} from 'react-bootstrap'

const OAPagination = ({currentPage, totalPages, loadPage}) => {
   const pageArray = []
   let minPage = currentPage - 3
   let maxPage = currentPage + 3

   if (maxPage > totalPages) {
      minPage -= maxPage - totalPages
   }

   if(minPage < 1) {
      maxPage += 1 - minPage
   }

   minPage = Math.max(1, minPage)
   maxPage = Math.min(totalPages, maxPage)

   if (minPage > 1) {
      pageArray.push(1)
   }
   if (minPage > 2) {
      pageArray.push('e')
   }

   for(let p = minPage; p <= maxPage; p++ ) {
      pageArray.push(p)
   }

   if (maxPage < (totalPages - 1)) { 
      pageArray.push('e')
   }

   if(maxPage < totalPages) {
      pageArray.push(totalPages)
   }

   return <div>
    <Pagination>
      {pageArray.map((page, index) => {
        return (page === 'e') ? <Pagination.Ellipsis key={index} /> : 
          <Pagination.Item key={index} active={page === currentPage} onClick={() => loadPage(page)} >
            {page}
          </Pagination.Item>
      })}
    </Pagination>
   </div>
}

export default OAPagination
