import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import useUser from '../../hooks/useUser';
import Default from '../../assets/logo-white.svg';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/features/usersSlice';
import { User } from '../../utils/types/state';
import { icons } from '../../utils/assets';
import { Link } from 'react-router-dom';

const Users = () => {
  const { loading } = useUser();
  const users = useSelector(selectUsers);

  return (
    <section>
      {loading ? (
        <div className="text-center mt-8">
          <ProgressBar
            height={80}
            width={80}
            ariaLabel="progress-bar-loading"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
      ) : (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {users.map((user: User) => (
              <div key={user.id} className="p-4 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                  <img src={Default} alt="Profile Image" className="rounded-full h-40 w-40 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h3>
                  <div className='flex justify-center items-center gap-2'>
                      <icons.locationIcon/>
                      <p className="text-gray-500">{user.address}</p>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                      <icons.bookIcon/>
                      <p className="text-gray-500">{user.books.length} books</p>
                  </div>  
                </div>
                <div className="mt-4 text-center">
                  <Link
                        to={`/profile/${user.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

const MemoizedUsers = React.memo(Users);
export default MemoizedUsers;
