import SideBar from "./Sidebar.jsx"
import Feed from "./Feed.jsx"
import Suggestions from "./Suggestion.jsx"

function App(){
    return (
        <>
        <div className="d-flex vh-100">
         <div className="w-20"><SideBar/></div>
         <div className="w-50"><Feed></Feed></div>
         <div className="w-30"><Suggestions></Suggestions></div>
        </div>
        </>
    )
}

export default App