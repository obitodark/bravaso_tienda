import { ViewNavBar } from "../components"
import {Outlet} from "react-router-dom"

const MyLayout=() =>{
return(
<div>
<ViewNavBar/>
<Outlet/>
</div>
)

}
export default MyLayout
