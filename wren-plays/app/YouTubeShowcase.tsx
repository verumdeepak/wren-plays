
const FEATURED_PLAYLIST = "UU7bLaLDT-W5TUHge-6LyTig";

const UPLOADS_PLAYLIST = "UU7bLaLDT-W5TUHge-6LyTig";

export default function YouTubeShowcase() {
  return (
    <section className="youtube-showcase" id="videos">

      <p className="eyebrow">
        THE WREN PLAYS EXPERIENCE
      </p>

      <h2>
        LATEST <span>ADVENTURES.</span>
      </h2>

      <p className="showcase-description">
        From Minecraft survival to unforgettable
        gaming moments, explore my universe.
      </p>

      <div className="youtube-grid">

        <div className="youtube-panel">
          <div className="youtube-label">
            HANDPICKED BY WREN
          </div>

          <h3>Featured Videos</h3>

          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${FEATURED_PLAYLIST}`}
              title="Wren Plays Featured Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <p>
            A collection of my favourite adventures.
          </p>
        </div>

        <div className="youtube-panel">
          <div className="youtube-label">
            FRESH FROM YOUTUBE
          </div>

          <h3>Latest Uploads</h3>

          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`}
              title="Wren Plays Latest Uploads"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <p>
            New videos automatically appear here.
          </p>
        </div>

      </div>

      <a
        href="https://www.youtube.com/@wrenplays.11"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn"
      >
        EXPLORE MY CHANNEL ↗
      </a>

    </section>
  );
}
