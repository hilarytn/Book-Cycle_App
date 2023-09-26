import React from 'react'

const UserBooks = () => {
  return (
    <div>
      hello
    </div>
  )
}

const mermoizedUserBooks = React.memo(UserBooks)
export default mermoizedUserBooks
