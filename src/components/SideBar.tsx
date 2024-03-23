'use client';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Redirect from './Redirect';

// -----------------------------making custom data type for for using props in for sidebar(starts)--------------------------------

interface obj {
    "updateOpen": Function
}
// -----------------------------making custom data type for for using props in for sidebar(ends)--------------------------------


export default function SideBar(props: obj) {

    // accessing the current state of sidebar
    const [open, setOpen] = useState(false);

    // depending on current state the sidebar content will be rendered
    const [renderContent, setRenderContent] = useState(false);

    // to make the sidebar item active according to the current url
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    function handleOpen() {
        setOpen(!open);
        props.updateOpen(!open)
    }

    //============================render the content only after the sidebar is completely opened(starts)==============================
    useEffect(() => {
        let timeout;
        if (open) {
            timeout = setTimeout(() => {
                setRenderContent(true);
            }, 600);
        } else {
            setRenderContent(false);
        }
    }, [open]);
    //============================render the content only after the sidebar is completely opened(ends)=================================


    return (
        <div className='flex w-full'>
            {/* ----------------------------------------------------redirect (starts)-------------------------------------------- */}
            {/* will be redirected discussion-forum if the size of the screen changes to mobile and to home route if its laptop*/}
            <Redirect />
            {/* ----------------------------------------------------redirect (ends)-------------------------------------------- */}



            {/* content will take full width of its container when opened and will take 0 width when closed */}
            <div className={` h-screen  ${open ? "w-full " : "w-0"}`}
                style={{
                    backgroundColor: "#1E375F",
                }}>


                {/* content will be rendered only when side bar is opened */}
                {renderContent && (
                    <div  >
                        {/* ====================================================================================== */}
                        {/*------------------------- top section of side bar (starts)--------------------------- */}

                        <div className='flex text-white  p-4 items-center justify-between
                            till-mobile-s till-mobile-m till-mobile-l till-tablet till-laptop till-laptop-m  till-laptop-l
                            sidebar-text  '
                            style={{ borderBottom: "2px solid #314D70" }}>

                            {/* -----------profile icon-------- */}
                            <div className='flex items-center justify-center'>
                                <PersonIcon className='sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl' />
                                <h1 className=''>Hello, User</h1>
                            </div>

                            {/* -----------notification icon-------- */}
                            <NotificationsIcon className='sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl' />

                        </div>

                        {/*------------------------- top section of side bar (ends)--------------------------- */}
                        {/* ====================================================================================== */}

                        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                        {/* ====================================================================================== */}
                        {/*------------------------- main section of side bar (starts)--------------------------- */}

                        <div className='text-white 
                        till-mobile-s till-mobile-m till-mobile-l till-tablet till-laptop till-laptop-m till-laptop-l
                         sidebar-text  sidebar-lg-text sidebar-laptop-text  
                          2xl:text-2xl'>

                            {/* ======================================================================================= */}
                            {/*------------------ LINKS FOR DISCUSSION FORUM AND MARKET STORIES STARTS------------------- */}

                            <div className='flex flex-col'>
                                {/* --------------------------------discussion link (starts)-------------------------------- */}
                                <Link href={"/discussion-forum"}
                                    className='p-2 mt-2 pl-3  flex justify-between items-center'
                                    style={{
                                        backgroundColor: isActive("/discussion-forum") ? '#142841' : '#1E375F',
                                    }}>

                                    <div className=''>
                                        <ChatIcon className='text-sm flex-nowrap
                                            till-mobile-s till-mobile-m till-mobile-l till-tablet till-laptop till-laptop-m till-laptop-l
                                        
                                        ' />

                                        Discussion Forum
                                    </div>

                                    <ArrowDropDownIcon className='till-mobile-s till-mobile-m till-mobile-l till-tablet till-laptop till-laptop-m till-laptop-l' />

                                </Link>
                                {/* --------------------------------discussion link (ends)-------------------------------- */}

                                {/* --------------------------------market stories link (starts)-------------------------------- */}

                                <Link href={'/market-stories'}
                                    className='p-2 mb-2 pl-3'
                                    style={{
                                        backgroundColor: isActive("/market-stories") ? '#142841' : '#1E375F',
                                    }}>
                                    {/* <PaidIcon className='text-sm lg:text-base ' /> Market Stories */}
                                    <PaidIcon className='text-sm 
                                        till-mobile-s till-mobile-m till-mobile-l till-tablet till-laptop till-laptop-m till-laptop-l

                                    ' /> Market Stories

                                </Link>

                                {/* --------------------------------market stories link (ends)-------------------------------- */}


                            </div>

                            {/*------------------ LINKS FOR DISCUSSION FORUM AND MARKET STORIES ENDS------------------- */}
                            {/* ======================================================================================= */}




                            {/* ======================================================================================= */}
                            {/* ----------------Other remamining items we can further add links to them------------------- */}
                            <ul className='flex flex-col  gap-5'>
                                <li className='ml-10 cursor-pointer'>Sentiment</li>
                                <li className='ml-10 cursor-pointer'>Market</li>
                                <li className='ml-10 cursor-pointer'>Sector</li>
                                <li className='ml-10 cursor-pointer'>Watchlist</li>
                                <li className='ml-10 cursor-pointer'>Events</li>
                                <li className='ml-10 cursor-pointer'>News/Interview</li>
                            </ul>
                            {/* ----------------Other remamining items we can further add links to them------------------- */}
                            {/* ======================================================================================= */}



                        </div>

                        {/*------------------------- main section of side bar (ends)--------------------------- */}
                        {/* ====================================================================================== */}


                    </div>)}
            </div>

            {/* ==================================================side arrow(starts)================================================================= */}
            {/* -----------on clicking this icons sidebar will open (if closed) and will close (if opened)------------------- */}
            <div className={`flex flex-col items-center justify-center h-screen ${open ? "w-2" : "w-0"}`}
                style={{ backgroundColor: "#F0F0F0" }}>
                <div onClick={handleOpen} className='border-r-2 flex justify-center items-center pl-3  pt-8 pb-8' style={{ backgroundColor: "#1E375F" }}>

                    <PlayArrowIcon className='text-white text-base' />

                </div>
            </div>
            {/* ==================================================side arrow(ends)================================================================= */}

        </div>
    )
}