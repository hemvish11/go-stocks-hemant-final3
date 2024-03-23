import MarketStoryCard from "@/components/MarketStoryCard";
import storiesData from "@/data/stories-data.json"
//---------------------------------------- Creating the custom data type for each story card(starts)----------------------------------------

interface Story {
    id: number,
    image: string,
    title: string,
    description: string
}

//---------------------------------------- Creating the custom data type for each story card(ends)----------------------------------------


export default function MarketStoriesPage() {
    // ---------------------------------accessing all stories data(starts)---------------------------------------------

    const allStories = storiesData.stories;

    // ---------------------------------accessing all stories data(ends)---------------------------------------------


    return (
        <div>
            {/*------------------------------------ rendering all market stories(starts)------------------------------------ */}
            {allStories.map((story: Story) => (
                <MarketStoryCard
                    key={story.id}
                    image={story.image}
                    title={story.title}
                    description={story.description}
                />
            ))}
            {/*------------------------------------ rendering all market stories(ends)------------------------------------ */}

        </div>
    )
}