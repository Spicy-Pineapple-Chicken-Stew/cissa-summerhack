import MycontentsQuickViewMobile from "../Components/MycontentsQuickViewMobile";
import MycontentsQuickViewDesktop from "../Components/MycontentsQuickViewDesktop";
import MC_detailedview from "../Components/MycontentsDetailedView";
import MC_detailedview_mobile from "../Components/MycontentsDetailedViewMobile";
import {MobileContext} from "../Contexts/MobileContext";
import {useContext, useState} from "react";

export default function MyContents(){
    let [isMobile, setIsMobile] = useContext(MobileContext)
    let [isQuickView, setIsQuickView] = useState(true)

    return(
        <div>
            {isMobile && isQuickView && <MycontentsQuickViewMobile isQuickView={[isQuickView, setIsQuickView]} />}
            {isMobile && !isQuickView && <MC_detailedview_mobile isQuickView={[isQuickView, setIsQuickView]}/>}
            {!isMobile && isQuickView && <MycontentsQuickViewDesktop isQuickView={[isQuickView, setIsQuickView]}/>}
            {!isMobile && !isQuickView && <MC_detailedview isQuickView={[isQuickView, setIsQuickView]}/>}
        </div>
    )
}
