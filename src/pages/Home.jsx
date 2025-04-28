import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import Pic from '../Assets/home.png';
import '../Assets/haha.css';




function Home() {
  return (
    <div className="home-container">
      <div className="intro-text">
        <h1>Let Me Introduce Myself</h1>
        <p>  
        I’m a shinobi on a quest to become the ultimate warrior, mastering the ancient arts of stealth and strategy. My journey is long, and every step I take brings me closer to my true power.  
        </p>  
        <p>  
        Right now, I’m learning the forbidden techniques from the Hidden Leaf Village, training in jutsu and perfecting my chakra control. Techniques like Shadow Clone Jutsu, Rasengan, and perhaps one day, even the mighty Sharingan.  
        </p>  
        <p>  
        My mission? To protect the village, defend my friends, and conquer challenges with the swift precision of a ninja in the night.  
        </p>  
        <p>  
        Every day is a step closer to unlocking my true potential, and I’m eager to continue growing as a shinobi. No matter the obstacle, I’ll rise to the challenge and claim victory with the heart of a true ninja.  
        </p>


        <h2 className="typewriter-text">
          <span>
            <Typewriter
              words={["I'm a Shinobi", 'A Future Hokage', 'A Sage Jutsu Master', 'A Six Paths Reincarnation', "I'm Practically Naruto from that anime", "Your still here?", "What the....", "When are you going to leave?", "BRUH get out","Water. Earth. Fire. Air.","Long ago, the four nations lived in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them. But when the world needed him most, he vanished. A hundred years passed, and my brother and I discovered the new Avatar, an airbender named Aang. And although his airbending skills are great, he has a lot to learn before he's ready to save anyone. But I believe Aang can save the world."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <Link to="/contact" className="connect-button">
          Let's Connect
        </Link>
      </div>

      <div className="profile-image">
      <img src={Pic} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;


