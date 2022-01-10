/* eslint-disable arrow-body-style */
import React from 'react'
import { Link } from 'react-router-dom'

import AppLayout from '../components/layout/AppLayout'

const SelectPage = () => {
  return (
		<>
        <AppLayout>
        <div className='flex h-screen'>
            {/* 왼쪽 - 파티장으로 참여하기 */}
            <div style={{ width:'50vw'}} className='text-center border-r-2'>
                <div className='my-32'>
                    <div className='mainFont text-5xl'>
                        파티장이 신가요? 
                    </div>
                    
                    <button>
                        <Link to='/host/init'>
                            <div className='mt-8 p-4 border-2 border-purple-500 rounded-md text-purple-500'>
                                파티장으로 참여하기
                            </div>
                        </Link>
                    </button>
              
                  
                </div>
              
            </div>

            {/* 오른쪽 - 파티원으로 참여하기 */}
            <div style={{ width:'50vw'}} className='text-center'>
                <div className='my-32'>
                    <div className='mainFont text-5xl'>
                        파티원이 신가요?
                    </div>

                    <button>
                        <Link to="/guest/email">
                          <div className='mt-8 p-4 border-2 border-purple-500 rounded-md text-purple-500'>
                                파티원으로 참여하기
                          </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
			</AppLayout>
		</>
	)
}

export default SelectPage
