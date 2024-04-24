'use client'
import React from 'react'
import { PageDetails } from '../_lib/slices/themeSlices'
import { useSelector } from 'react-redux'

const ReduxPage = () => {
  const theme = useSelector((state : any) => state?.theme.activeTheme)
  const activePageDetails = useSelector((state : any) => state?.theme.activePageDetails)
  
  return (
    <div className={`p-4 ${theme}`} style={{height: "89.5vh"}}>
      <div className='flex mb-8'>
        <p className='mr-5'>Introduction</p><p className='mr-5'>&#10140;</p><p className='mr-5'>{activePageDetails[0].value}</p>
      </div>

      <div>

        {
          activePageDetails.map((tag : PageDetails, index : number) => 
          
            (tag.type === 'title') ? 
              <>
                <h1 className={`${tag.type} mb-6`}>{tag.value}</h1>
              </> :
              (tag.type === 'subtitle') ?
              <>
                <h2 className={`${tag.type} mb-4`}>{tag.value}</h2>
              </> :
              (tag.type === 'section') ?
              <>
                <h3 className={`${tag.type} mb-4`}>{tag.value}</h3>
              </> :
              <>
                <p className={`${tag.type} mb-4`}>{tag.value}</p>
              </>
              

          
          )
        }

      </div>
    </div>
  )
}

export default ReduxPage