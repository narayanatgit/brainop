import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Nav from './Nav';
const Posts = () => {
   

    const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const user =JSON.parse(localStorage.getItem("profile"))
    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `http://localhost:3000/posts/`,{params:{page,limit:3}},{headers: {"Authorization" : `Bearer ${user.Token}`}}
            );

            setData((prev) => {
                return [...prev, ...response.data.posts];
            });
            setLoading(false);
        }, 1500);
    }, [page]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };
  return (
    <div>
        <Nav/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {
              Data.map(item=>(

                <div className=' px-96'>
                   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={item.body.thumbnail} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.body.title}</h5>
        </a>
        
    </div>
</div>
<br></br>
                    </div>
              ))
        }
     {loading && <Loader />}
    </div>
  );
}

export default Posts