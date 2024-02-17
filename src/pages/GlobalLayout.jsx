import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';
import { useQuery } from 'react-query';
import apiClient from '../Data/apiclient';

export default function GlobalLayout() {

  const q = useQuery({
    queryKey: [],
    // cacheTime: 60000000,
    // staleTime: 60000000,
    queryFn: async () => {
    let url = "/TestS";

    var ret = await apiClient.get(url, {text: "Backend test"});

    return ret;
    },
});

if (q.isLoading) {
    return <div>Loading...</div>;
}
if(q.data?.data?.text){
  console.log(q.data.data.text)
}

return(<>
 <main className="main d-flex" id="top" style={{flexDirection: "column", height: "100%", backgroundColor: "var(--my-variable)"}}>

    <GlobalNavBar />
    <div className="content" style={{flexGrow: "1"}}>
        <Outlet />
    </div>
  {/*Footer Goes here */}
 </main>


</>)
}