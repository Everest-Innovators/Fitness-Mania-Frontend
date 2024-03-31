import React from "react";
import Post from "../../Components/Post/Post";
import Avatar from "../../Assets/avatar.png";
import "../../Css/Home/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        <Post
          avatar={Avatar}
          username="new__"
          timestamp={Date.now() - 100000}
          title="[AskJS] Coding a webpage button that redirects to a random URL (read body text)"
          body={`Hello. I'm working on a Neocities website and I want to create a button that redirects the user to a random web URL when clicked (purely for fun).

But here's the problem: even after following several guides I discovered on places like Quora and Stack Overflow, my code still doesn't seem to work at all — I've followed several different scripts I found online to no avail, and my button just redirects to a text page of the Javascript itself (image of both code strings here, issue lies within line 97).

I also checked through the rest of my website's code and couldn't find any sort of conflicting elements, so the issue probably lies within the way in which I formatted the "MysteryLink" JavaScript (or the HREF string itself).

I'm wondering if anyone here can guide me towards a working method of fixing this, or provide an alternative method for achieving the effect entirely. Any an all suggestions will be appreciated, thank you all in advance for your time.`}
          postId={1232}
          comments={12}
          upvotes={53}
          downvotes={53}
        />
      </div>
    </div>
  );
};

export default Home;
