import ReduxNavbar from '@/components/ReduxComponents/ReduxNavbar'
import React, { ReactElement } from 'react'
import { useAppSelector } from '../lib/hooks'
import { PageDetails } from '../lib/slices/themeSlices'

const Redux = () => {

  const theme = useAppSelector(state => state.theme.activeTheme)
  const activePageDetails = useAppSelector(state => state.theme.activePageDetails)
  console.log(activePageDetails)
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

export default Redux

Redux.getLayout = function getLayout(page : ReactElement) {
    return (
        <ReduxLayout>
            {page}
        </ReduxLayout>
    )
}

const ReduxLayout = ({children} : { children : React.ReactNode }) => {
    return (
      <div>
          <ReduxNavbar></ReduxNavbar>
          {children}
      </div>
    )
}