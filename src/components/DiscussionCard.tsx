"use client"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Image from 'next/image';

// -----------------------------making custom data type for for using props in typescript(starts)--------------------------------
interface DiscussionCardProps {
  image: string,
  name: string,
  commentTime: number,
  comment: string,
  likes: number,
  views: number,
  commentsOnPost: number
}
// -----------------------------making custom data type for for using props in typescript(ends)--------------------------------




const DiscussionCard: React.FC<DiscussionCardProps> = ({ image, name, commentTime, comment, likes, views, commentsOnPost }) => {

  return (
    <div className=" flex border shadow-xl mt-8 mr-2 ml-2 rounded-md discussion-card">



      {/* ------------------------------------------------------------------------------------------------------------------ */}
      {/*---------------------------------------------------Left part = image part (starts)----------------------------------------------- */}

      <div className="">
        <Image alt='profile-image' width={300} height={300} className='max-w-12 m-5 mt-1 mr-2' src={image} />
      </div>

      {/*---------------------------------------------------Left part = image part (ends)----------------------------------------------- */}
      {/* ------------------------------------------------------------------------------------------------------------------ */}



      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX */}



      {/* ------------------------------------------------------------------------------------------------------------------ */}
      {/*---------------------------------------------------Right part (starts)----------------------------------------------- */}

      <div >

        <div className="flex  justify-between mt-3 mr-4">

          {/* --------------------------------------------------------- Name(starts)----------------------------------------- */}

          <div className="flex justify-between items-center gap-3">
            <h1 className='font-semibold text-base lg:text-lg'>{name}</h1>
            <button className=' flex items-center justify-center bg-blue-600 rounded-3xl icons-text text-white h-5 hover:bg-blue-900 p-3 lg:text-xs' >Sector 2</button>
          </div>

          {/* --------------------------------------------------------- Name(ends)----------------------------------------- */}


          {/* --------------------------------------------------------- commented x min ago(starts)----------------------------------------- */}

          <p className='text-blue-400 icons-text font-semibold lg:text-xs'>{commentTime} min ago</p>

          {/* --------------------------------------------------------- commented x min ago(ends)----------------------------------------- */}


        </div>



        {/* -------------------------------------------------------main text (starts)---------------------------------------------------------- */}


        <div className="mt-2 mb-2 text-sm mr-2">
          <p className='paragraph-text lg:text-base'>{comment}</p>
        </div>


        {/* -------------------------------------------------------main text (ends)---------------------------------------------------------- */}



        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
        {/* -----------------------------------------------All icons of likes,views and comments(starts)--------------------------------------------- */}

        <div className='flex justify-between mr-12 mb-3 font-semibold icons-text lg:text-xs'>
          {/* ----------------------------------------------------------likes------------------------------------------------------------------------ */}

          <div className='flex items-center'>
            <FavoriteBorderOutlinedIcon className='icons lg:text-sm' />
            <span >{likes}k</span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          {/* ---------------------------------------------------------views---------------------------------------------------------------------- */}


          <div className='flex items-center '>
            <VisibilityOutlinedIcon className='icons lg:text-lg' />

            <span> {views}k</span>

          </div>


          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------comments------------------------------------------------------------------ */}

          <div className='flex items-center'>
            <ChatBubbleOutlineOutlinedIcon className='icons lg:text-sm' />

            <span> {commentsOnPost}k comments</span>

          </div>

          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          {/* ------------------------------------------------------------Share---------------------------------------------------------------------- */}

          <div className='flex items-center'>
            <ShareOutlinedIcon className='icons lg:text-sm' />

            <span> Share</span>

          </div>

        </div>

        {/* -----------------------------------------------All icons of likes,views and comments(ends)--------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}






      </div>


      {/*---------------------------------------------------Right part (ends)----------------------------------------------- */}
      {/* ------------------------------------------------------------------------------------------------------------------ */}


    </div>
  )
}

export default DiscussionCard