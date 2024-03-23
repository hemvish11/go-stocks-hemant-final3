import DiscussionCard from "@/components/DiscussionCard";
import Homepage from "@/components/Homepage";
import commentData from "../data/discussion-data.json";


//---------------------------------------- Creating the custom data type (starts)----------------------------------------
interface Comment {
  id: number,
  image: string,
  name: string,
  commentTime: number,
  comment: string,
  likes: number,
  views: number,
  commentsOnPost: number
}
//---------------------------------------- Creating the custom data type (ends)-------------------------------------------

export default function Home() {
  // ---------------------------------------accessing all posts data (starts)---------------------------------------------------- 
  const allComments = commentData.person;
  // ---------------------------------------accessing all posts data (ends)---------------------------------------------------- 


  return (
    <main >
      {/* --------------------for medium size screen we are making all discussion cards hidden(starts)------------------------------------ */}
      <div className="md:hidden">

        {allComments.map((person: Comment) => (
          <DiscussionCard
            key={person.id}
            image={person.image}
            name={person.name}
            commentTime={person.commentTime}
            comment={person.comment}
            likes={person.likes}
            views={person.views}
            commentsOnPost={person.commentsOnPost}
          />
        ))}

      </div>
      {/* -----------------for medium size screen we are making all discussion cards hidden(ends)------------------------------------ */}


      {/* -----------------------------we will further render the homepage(starts)--------------------------------------- */}
      
      <div className="homepage">
        <Homepage />
      </div>

      {/* -----------------------------we will further render the homepage(ends)--------------------------------------- */}

    </main>
  );
}
