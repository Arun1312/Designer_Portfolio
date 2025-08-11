import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const contentRef = useRef(null)
  const [showFooter, setShowFooter] = useState(false)

  const figmaLinks = {
    eotWeb: 'https://www.figma.com/proto/ZD174yaF3u63abvXGZb82w/Untitled?node-id=0-1&t=mPW4CSemltjOY2he-1',
    eotApp: 'https://www.figma.com/proto/peJcelcPBj5pxW5oEu9vxZ/Untitled?node-id=0-1&t=jMdSBvgHQCIHVOJ6-1',
    uniHearts: 'https://www.figma.com/proto/JSGHfHyWkv2qHJCHQ7xIov/UniHearts?node-id=1-2&t=8bXkEvMfuo1A8lIs-1',
    musicPlayer: 'https://www.figma.com/proto/kIlNpjpkxcQEQv08Krtmuf/Untitled?node-id=0-1&t=FVRLMzLp6iuiJpWB-1',
  }

  const handleScroll = () => {
    const el = contentRef.current
    if (!el) return

    const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 10
    setShowFooter(isBottom)
  }

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      <div className="header">
        <a href="https://www.linkedin.com/in/arun-singh-beniwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1Z1jKpKIB_pBgdXX7SuqNga45ybT9W00P/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://drive.google.com/drive/folders/1QKkqBENi6NiPdi5sUBKnFJZTdoq1mGmJ?usp=drive_link" target="_blank" rel="noopener noreferrer">Certification</a>
      </div>

      <div className="content" ref={contentRef}>
        <div className="intro-container">
          <h1>
            HI, I'M <span className="name">ARUN</span><br />
            <span className="highlight">UI/UX</span> DESIGNER.
            <div className="line"></div>
          </h1>
        </div>

        <div className="projects">
          <h1>Projects:</h1>

          <div className="project1 project">
            <div className="image main-image"></div>
            <hr className="vertical-line" />
            <div className="text-content">
              <h1>EOT-WEB</h1>
              <p className="description">
                A fully designed food delivery website prototype created in Figma, featuring intuitive user flows, responsive layouts, restaurant listings, menu browsing, and seamless checkout experience.
              </p>
              <a
                href={figmaLinks.eotWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="figma-btn"
              >
                Link to Figma
              </a>
            </div>
          </div>

          <div className="project4 project">
            <div className="image loginmenu-image"></div>
            <hr className="vertical-line" />
            <div className="text-content">
              <h1>EOT-APP</h1>
              <p className="description">
                The mobile app version of my food delivery platform, designed for seamless browsing, quick ordering, and smooth user experience on the go.
              </p>
              <a
                href={figmaLinks.eotApp}
                target="_blank"
                rel="noopener noreferrer"
                className="figma-btn"
              >
                Link to Figma
              </a>
            </div>
          </div>

          <div className="project2 project">
            <div className="image onboarding-image"></div>
            <hr className="vertical-line" />
            <div className="text-content">
              <h1>UniHearts</h1>
              <p className="description">
                Designed and developed an intra-college dating app with a focus on connecting verified students from the same college. Launched the beta version on Play Store, featuring secure college ID verification, user-friendly interface, and real-time chat functionality.
              </p>
              <a
                href={figmaLinks.uniHearts}
                target="_blank"
                rel="noopener noreferrer"
                className="figma-btn"
              >
                Link to Figma
              </a>
            </div>
          </div>

          <div className="project3 project">
            <div className="image patterns-image"></div>
            <hr className="vertical-line" />
            <div className="text-content">
              <h1>Music Player</h1>
              <p className="description">
                My very first Figma project — a basic music player design. Simple and straightforward, included here to show where my design journey began.
              </p>
              <a
                href={figmaLinks.musicPlayer}
                target="_blank"
                rel="noopener noreferrer"
                className="figma-btn"
              >
                Link to Figma
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className={`footer ${showFooter ? 'visible' : 'hidden'}`}>
        <p> UI/UX Design Portfolio</p>
      </footer>
    </div>
  )
}

export default App
