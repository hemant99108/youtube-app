import React from "react"; 


const Head=()=>{
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8" alt="menu-icon" src="https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png"/>
                <img className="h-8 mx-2" alt="youtube-logo" src="https://tse3.mm.bing.net/th?id=OIP.bU0knxreaQXt5Lv8DNTY_wHaEK&pid=Api&P=0&h=180"/>
            </div>
            <div className="col-span-10 px-10">
                <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full"/>
                <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
            </div>
            
            <div className="col-span-1">
                <img className="h-8" alt="user-icon" src="https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180"/>
            </div>
        </div>
    )
}

export default Head;