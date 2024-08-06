import React, { Children, FC, PropsWithChildren } from 'react'

const PageHeader: FC<PropsWithChildren> = ({children}) => {
  return (
    <div  className='header-section-create'>
        {
            children
        }
    </div>
  )
}

export default PageHeader