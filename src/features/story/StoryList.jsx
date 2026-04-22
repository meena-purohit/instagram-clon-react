import Story from "./Story";
import storyData from "./storyData";

function StoryList() {
  return (
    <div className="flex gap-4 overflow-x-auto p-4 bg-white rounded-lg shadow">
       {storyData.map((story) => (
        <Story key={story.id} username={story.username} image={story.image} />
      ))} 
       
      
</div>
  ) 
}

export default StoryList;
