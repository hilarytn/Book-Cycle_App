import React from 'react'
import { ProgressBar } from 'react-loader-spinner'
import useUser from '../../hooks/useUser'
import Default from '../../assets/logo-white.svg';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/features/usersSlice';

const Users = () => {

    const { loading } = useUser()
    const users = useSelector(selectUsers)

  return (
    <section>
        {
            loading ? (
                <div>
                    <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor = '#F4442E'
                            barColor = '#51E5FF'
                        />  
                </div> ): (
                    
                )
        }
    </section>
  )
}

const MermoizedUsers = React.memo(Users)
export default MermoizedUsers
