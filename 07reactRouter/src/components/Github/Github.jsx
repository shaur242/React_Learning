import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/shaur242').then(response => response.json()).then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[]
  // )
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="image" width={300} />
    </div>
  );
}

export default Github;

export const GitHubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/shaur242')
  return response.json();
}
