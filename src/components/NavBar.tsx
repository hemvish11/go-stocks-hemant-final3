'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------When we click on either of two nav items then the page will be redirected to that route-------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------


function Navbar() {
    //-----------for uaccessing pathname using usePathname method-----------
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const NavLinks = [
        { id: 1, name: 'Discussion Forum', path: '/discussion-forum' },
        { id: 2, name: 'Market Stories', path: '/market-stories' },
    ];

    return (
        // ---------------------------------------------------------------------------------------------------------------------------------------
        // ---------------------------------------------------------nav bar (starts)-------------------------------------------------------------------
        <nav className='hide-navbar flex justify-between items-center text-xl text-center'
            style={{
                borderLeft: '5px solid black',
                borderRight: '5px solid black',
            }}>
            {/* // --------------make the links clickable and active state is highlighted with an underline and dark background color of nav item--------------------- */}

            {NavLinks.map((link, idx) =>
                <div key={idx} className={`p-2 w-2/4 text-white mb-1 mt-1 text-base
                relative ${isActive(link.path) ? 'border-b-2 border-red-500' : ''}`}
                    style={{
                        backgroundColor: isActive(link.path) ? '#142841' : '#1E375F',
                    }}>

                    <Link href={link.path}
                    >
                        {link.name}
                    </Link>
                </div>

            )}


        </nav>
        // ---------------------------------------------------------nav bar (ends)-------------------------------------------------------------------
        // ---------------------------------------------------------------------------------------------------------------------------------------


    )
}

export default Navbar