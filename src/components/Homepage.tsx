import React from 'react'
import DiscussionCard from './DiscussionCard'
import MarketStoryCard from './MarketStoryCard'
import commentData from "../data/discussion-data.json";
import storiesData from "../data/stories-data.json"

//---------------------------------------- Creating the custom data type for each comment box(starts)----------------------------------------

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

//---------------------------------------- Creating the custom data type for each comment box(ends)----------------------------------------


//---------------------------------------- Creating the custom data type for each story card(starts)----------------------------------------

interface Story {
    id: number,
    image: string,
    title: string,
    description: string
}

//---------------------------------------- Creating the custom data type for each story card(ends)----------------------------------------


function Homepage() {
    // ---------------------------------accessing all comments and stories data(starts)---------------------------------------------
    const allComments = commentData.person;
    const allStories = storiesData.stories;
    // ---------------------------------accessing all comments and stories data(ends)---------------------------------------------


    return (
        // -----------------------------keeping discussion forum part on left side and market------------------------------
        // --------------------------------------stories part on right side (starts)--------------------------------------------

        <div className="flex justify-between ">



            {/* -----------------------------rendering discussion cards component(starts)------------------------------- */}
            {/* -----------------------left part of will 3/4th part of the available screen(starts)----------------------------- */}

            <div className=" flex flex-col w-9/12 ">
                <span className=" text-red-600 font-semibold text-2xl p-1 mt-2 ml-2 -mb-5 w-64"
                    style={{ backgroundColor: "#F0F0F0" }}>
                    DISCUSSION FORUM
                </span>
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

            {/* -----------------------left part of will 3/4th part of the available screen(ends)----------------------------- */}
            {/* -----------------------------rendering discussion cards component(ends)------------------------------- */}





            {/* -----------------------------rendering story cards component(starts)------------------------------- */}
            {/* -----------------------right part of will take 3/4th part of the available screen(starts)----------------------------- */}

            <div className="flex flex-col w-3/12">
                <span className="text-red-600 font-semibold text-xl p-1 mt-2 ml-2 -mb-2 w-48"
                    style={{ backgroundColor: "#F0F0F0" }}>
                    MARKET STORIES
                </span>
                {allStories.map((story: Story) => (
                    <MarketStoryCard
                        key={story.id}
                        image={story.image}
                        title={story.title}
                        description={story.description}
                    />

                ))}
            </div>

            {/* -----------------------right part of will take 3/4th part of the available screen(ends)----------------------------- */}
            {/* -----------------------------rendering story cards component(ends)------------------------------- */}




        </div>


        // -----------------------------keeping discussion forum part on left side and market------------------------------
        // --------------------------------------stories part on right side (ends)--------------------------------------------

    )
}

export default Homepage