import React from 'react';
import { data } from '../data/dataUser';
import './StoreData.scss';

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const timeRegistration = () => {
//   const date = new Date(2019, getRandomArbitrary(5, 8), getRandomArbitrary(1, 30));
//   return date;

// }

// const dataList = data.map((user, index) => {
//   delete user.taskResults;
//   delete user.totalScoreChangeDate;
//   user.id = index;
//   user.registration = `${timeRegistration().toLocaleDateString()}`;
//   user.registrationGetTime = timeRegistration().getTime();
// return user}
//   )

function StoreData(props) {

  const storeList = data.map((user, index) => <li key="user.id">{`${index}  ${user.name}`}</li>);
  return (

    <table className="table">
      <thead className="sticky">
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Github ID</th>
          <th>Location</th>
          <th>Score</th>
          <th>Date registration</th>
          <th>Time registration</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="row">
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.githubId}</td>
            <td>{user.locationName}</td>
            <td>{user.totalScore.toLocaleString()}</td>
            <td>{user.registration}</td>
            <td>{user.registrationGetTime}</td>
            <td>{user.isActive ? 'yes' : 'no'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { StoreData };
