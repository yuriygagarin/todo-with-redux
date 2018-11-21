import React from 'react'

import Filters from './Filters'
import Form from './Form'
import List from './List'

const Todos = ({filter}) => (
  <div className='Todos panel'>
    <Filters />
    <Form />
    <List filter={filter || 'all'}/>
  </div>
)

export default Todos