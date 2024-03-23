import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Redirect: React.FC = () => {
    // -----------------------------------------------useRouter hook to access router object (starts)----------------------------------------------
    const router = useRouter();
    // -----------------------------------------------useRouter hook to access router object (ends)----------------------------------------------



    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------Navigator starts-----------------------------------------------------------------------------------

    // My idea behind this redirect components:-
    // ----when the screen size is mobile screen then the page will redirect to discussion-forum route-------------------------------------
    // ----------------------------otherwise it will be redirected to home route-----------------------------------------------------------
    useEffect(() => {

        const handleResize = () => {
            const isMobileSize = window.innerWidth <= 768;

            if (isMobileSize) {
                router.push('/discussion-forum');
            } else {
                router.replace("/");
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router]);

    // --------------------------------------------------Navigator ends-----------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------------------------


    return (
        <></>
    );
};

export default Redirect;
