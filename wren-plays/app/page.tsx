import YouTubeShowcase from "./YouTubeShowcase";
import MinecraftCharacter from "./MinecraftCharacter";
import { Suspense } from "react";
import { connection } from "next/server";
const youtube = "https://www.youtube.com/@wrenplays.11";
async function CopyrightYear() {
  await connection();

  return <small>© {new Date().getFullYear()} Wren Plays.</small>;
}
export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">
          WREN<span>PLAYS.</span>
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#videos">Videos</a>
          <a href="#store">Store</a>
          <a href="#community">Community</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY UNIVERSE</p>

          <h1>
            HEY, I'M <br />
            <span>WREN PLAYS.</span>
          </h1>

          <p className="description">
            Gamer. Creator. Dreamer.
            <br />
            Exploring infinite worlds, creating unforgettable
            adventures, and building an amazing gaming community.
          </p>

          <div className="buttons">
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              WATCH MY CHANNEL ↗
            </a>

            <a href="#about" className="secondary-btn">
              EXPLORE MY WORLD ↓
            </a>
          </div>
        </div>


<div className="hero-character">
  <MinecraftCharacter />
</div>

      </section>

<section className="about-section" id="about">
  <div className="about-container">

    <div className="about-intro">
      <p className="eyebrow">
        THE PERSON BEHIND THE SCREEN
      </p>

      <h2>
        HEY, I'M <span>WREN PLAYS!</span>
      </h2>

      <p className="about-description">
        I'm a Tamil gaming creator who loves Minecraft,
        storytelling, exploring games and building new things!
      </p>

      <p className="about-description">
        Whether I'm surviving another night in Minecraft,
        creating content, listening to music or exploring
        something completely new, I'm always looking for
        my next adventure.
      </p>

      <p className="about-highlight">
        One creator. Infinite possibilities.
      </p>
    </div>

    <div className="interests-container">

      <p className="eyebrow">BEYOND THE SCREEN</p>

      <h2>
        THINGS I'M <span>INTO.</span>
      </h2>

      <div className="interests-grid">

        <div className="interest-card minecraft">
          <div className="interest-icon">⛏️</div>
          <h3>MINECRAFT</h3>
          <p>Building worlds and creating adventures.</p>
        </div>

        <div className="interest-card youtube">
          <div className="interest-icon">▶️</div>
          <h3>YOUTUBE</h3>
          <p>Turning gaming moments into stories.</p>
        </div>

        <div className="interest-card music">
          <div className="interest-icon">🎵</div>
          <h3>MUSIC</h3>
          <p>Good music. Good vibes. Endless inspiration.</p>
        </div>

        <div className="interest-card sports">
          <div className="interest-icon">⚽</div>
          <h3>SPORTS</h3>
          <p>Football, competition and team spirit.</p>
        </div>

        <div className="interest-card gaming">
          <div className="interest-icon">🎮</div>
          <h3>GAMING</h3>
          <p>Discovering games beyond Minecraft.</p>
        </div>

        <div className="interest-card creativity">
          <div className="interest-icon">✨</div>
          <h3>CREATIVITY</h3>
          <p>Experimenting, imagining and building ideas.</p>
        </div>

      </div>
    </div>

    <div className="about-bottom">
      <h2>
        THIS IS JUST THE <span>BEGINNING.</span>
      </h2>

      <p>
        More adventures. More creativity.
        And a whole lot more gaming.
      </p>

      <a
        href={youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn"
      >
        EXPLORE MY YOUTUBE ↗
      </a>
    </div>

  </div>
</section>


     
<YouTubeShowcase />


      <section className="section" id="store">
        <p className="eyebrow">THE OFFICIAL COLLECTION</p>
        <h2>WREN <span>STORE.</span></h2>
        <p className="section-text">
          Something exciting is coming.
          Exclusive Wren Plays merchandise is currently
          in development.
        </p>
        <div className="coming-soon">COMING SOON</div>
      </section>

      

<section className="section community" id="community">
  <div className="community-heading">
    <p className="eyebrow">YOUR ADVENTURE CONTINUES HERE</p>

    <h2>
      FIND YOUR <span>CREW.</span>
    </h2>

    <p>
      More than just videos. Join the Wren Plays universe,
      meet fellow gamers, and be part of the next adventure.
    </p>
  </div>

  <div className="community-grid">

    {/* DISCORD */}
    <a
      href="https://discord.gg/yq8CBD2GSn"
      target="_blank"
      rel="noopener noreferrer"
      className="community-card discord-card"
    >
      <div className="community-card-top">
        <div className="community-platform-icon">
          <svg viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
            <path d="M104.4 8.58A102.6 102.6 0 0 0 79.4.8a72.2 72.2 0 0 0-3.2 6.6 95.3 95.3 0 0 0-28.5 0A72.2 72.2 0 0 0 44.5.8a102.6 102.6 0 0 0-25 7.78C3.7 32.1-.6 55.1 1.5 77.8a103.4 103.4 0 0 0 31.1 15.7 15.7 0 0 0 6.7-10.9 66.7 66.7 0 0 1-10.5-5.1c.9-.6 1.7-1.3 2.5-1.9a73.5 73.5 0 0 0 63.5 0c.8.6 1.6 1.3 2.5 1.9a66.7 66.7 0 0 1-10.5 5.1 15.7 15.7 0 0 0 6.7 10.9 103.4 103.4 0 0 0 31.1-15.7c2.5-26.3-4.3-49.1-18.2-69.2ZM42.4 63.8c-6.1 0-11.1-5.6-11.1-12.4S36.2 39 42.4 39s11.2 5.6 11.1 12.4c0 6.8-4.9 12.4-11.1 12.4Zm42.3 0c-6.1 0-11.1-5.6-11.1-12.4S78.5 39 84.7 39s11.2 5.6 11.1 12.4c0 6.8-4.9 12.4-11.1 12.4Z"/>
          </svg>
        </div>
        <span className="community-tag">THE COMMUNITY</span>
      </div>

      <div className="community-card-content">
        <span className="community-small-text">YOUR GAMING HQ</span>
        <h3>JOIN THE<br />DISCORD.</h3>
        <p>
          Connect with other gamers, share Minecraft moments,
          discuss videos, and hang out with the community.
        </p>
        <span className="community-action">
          JOIN THE SERVER <span aria-hidden="true">↗</span>
        </span>
      </div>

      <div className="community-bg-symbol" aria-hidden="true">#</div>
    </a>

    {/* YOUTUBE */}
    <a
      href={youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="community-card youtube-card"
    >
      <div className="community-card-top">
        <div className="community-platform-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/>
          </svg>
        </div>
        <span className="community-tag">THE CONTENT</span>
      </div>

      <div className="community-card-content">
        <span className="community-small-text">WATCH THE ADVENTURE</span>
        <h3>WATCH.<br />EXPLORE.</h3>
        <p>
          Minecraft survival, SMP stories, challenges,
          and new gaming adventures from Wren Plays.
        </p>
        <span className="community-action">
          VISIT CHANNEL <span aria-hidden="true">↗</span>
        </span>
      </div>

      <div className="community-bg-symbol" aria-hidden="true">▶</div>
    </a>

  </div>

  <p className="community-bottom-text">
    ONE CREATOR. ENDLESS ADVENTURES. ONE COMMUNITY.
  </p>
</section>



      <footer>
        <h3>WREN<span>PLAYS.</span></h3>
        <p>Built with creativity. Powered by passion.</p>
        
<Suspense fallback={<small>© Wren Plays.</small>}>
  <CopyrightYear />
</Suspense>

      </footer>
    </main>
  );
}
