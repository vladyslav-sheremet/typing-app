import { useRef, useState } from "react"

import Header from './components/Header'

const initialText = 'test text'

function App() {
  const [stringIn, setStringIn] = useState<string>(initialText)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const stringOutRef = useRef<any>(null)
  const beak = useRef<SVGPathElement>(null)
  const eye = useRef<SVGCircleElement>(null)
  const eyeWrapper = useRef<SVGCircleElement>(null)
  const body1 = useRef<SVGPathElement>(null)
  const body2 = useRef<SVGPathElement>(null)
  const body3 = useRef<SVGPathElement>(null)
  const body4 = useRef<SVGRectElement>(null)

  setInterval(() => {
    eye && eye?.current?.setAttribute('r', '0')
    eyeWrapper && eyeWrapper?.current?.setAttribute('r', '0')
    setTimeout(() => {
      eye && eye?.current?.setAttribute('r', '7.32678')
      eyeWrapper && eyeWrapper?.current?.setAttribute('r', '12.0793')
    }, 100)
  }, 5000)


  const setFocus = () => inputRef.current && inputRef.current.focus()

  const changeColor = (el: React.MutableRefObject<any>, color: string) => el.current.setAttribute('fill', color)

  const inputHandler = (e: any) => {
    if (stringIn.slice(0, 1) === e.target.value.slice(-1)) {
      stringOutRef.current.innerHTML = stringOutRef.current.innerHTML.concat(e.target.value.slice(-1))

      setStringIn(stringIn.slice(1))
    } else {
      changeColor(body1, '#ff5555')
      changeColor(body2, '#ff5555')
      changeColor(body3, '#ff5555')
      changeColor(body4, '#ff5555')

      setTimeout(() => {
        changeColor(body1, '#3375C4')
        changeColor(body2, '#2268BA')
        changeColor(body3, '#3375C4')
        changeColor(body4, '#3375C4')
      }, 300)
    }

    if (beak && beak?.current?.classList.contains('open')) {
      beak.current.classList.remove('open')
      beak.current.classList.add('close')
    } else {
      beak && beak?.current?.classList.remove('close')
      beak && beak?.current?.classList.add('open')
    }
  }

  const restartHandler = () => {
    setStringIn(initialText)
    stringOutRef.current.innerHTML = ''
  }

  const darkModeHandler = () => setDarkMode(!darkMode)

  return (
    <div className={`wrapper ${darkMode ? "wrapper-dark" : "wrapper-light"}`}>
      <div className="container">
        <Header restartHandler={restartHandler} darkModeHandler={darkModeHandler} darkMode={darkMode} />
        <main className="main__wrapper">
          <input type="text" id="keyboard" ref={inputRef} onChange={inputHandler} />
          <div className={`fields ${darkMode ? 'fields-dark' : 'fields-light'}`} onClick={setFocus}>
            <div className="f1" ref={stringOutRef}>
            </div>
            <div className="f-cursor">
              <svg className="alba" width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_13_23)">
                  <path ref={body1} fillRule="evenodd" clipRule="evenodd" d="M65.738 40.2499H114.387C112.188 28.8204 102.134 20.1862 90.0628 20.1862C77.9916 20.1862 67.937 28.8204 65.738 40.2499Z" fill="#2268BA" />
                  <path d="M60.9472 134.169L67.5986 151.56C67.9156 152.389 66.827 153.022 66.2629 152.337C65.1232 150.953 63.0807 150.722 61.6454 151.796C60.952 152.315 59.9477 152.066 59.5903 151.277L59.3611 150.771C58.5289 148.933 56.5762 147.873 54.5817 148.176L54.2814 148.222C53.2083 148.385 52.2771 147.476 52.4139 146.399L53.8598 135.02C54.1751 132.538 56.8211 131.088 59.0826 132.157C59.9403 132.562 60.6083 133.283 60.9472 134.169Z" fill="#D76423" />
                  <path d="M78.0456 134.424L84.697 151.815C85.014 152.643 83.9254 153.277 83.3613 152.592C82.2215 151.208 80.1791 150.977 78.7438 152.051C78.0504 152.57 77.0461 152.321 76.6887 151.532L76.4595 151.025C75.6273 149.188 73.6746 148.127 71.6801 148.431L71.3798 148.476C70.3067 148.639 69.3754 147.731 69.5123 146.654L70.9581 135.274C71.2734 132.793 73.9195 131.342 76.181 132.411C77.0387 132.817 77.7067 133.538 78.0456 134.424Z" fill="#D76423" />
                  <path ref={body2} d="M6.4547 86.518L42.0333 59.7317L76.9411 114.633C76.0739 113.296 52.1453 120.815 35.7 115.797C20.5529 111.175 10.3779 92.1065 6.4547 86.518Z" fill="#2268BA" />
                  <path ref={body3} d="M119.913 96.2609C117.895 121.235 95.7018 139.82 70.3434 137.771C44.985 135.722 26.0638 113.815 28.0817 88.8411C30.0995 63.867 52.2924 45.2824 77.6508 47.3313C90.1861 48.3441 97.0735 58.3267 104.711 67.0161C112.524 75.9051 120.933 83.6321 119.913 96.2609Z" fill="#3375C4" />
                  <path d="M77.1473 36.5969L77.1238 56.0906L169.135 56.0906C161.747 49.1863 143.157 41.5386 124.805 40.1393L77.1473 36.5969Z" fill="#FFB463" />
                  <path ref={beak} className='active' d="M169.422 65.6618L169.56 61.8693L92.0398 55.2354L105.498 125.374C139.607 126.451 168.176 99.7649 169.422 65.6618Z" fill="#FFB463" />
                  <rect ref={body4} x="50.3115" y="19.4305" width="41.9765" height="65.6194" rx="20.9883" transform="rotate(0.09 50.3115 19.4305)" fill="#3375C4" />
                  <circle ref={eyeWrapper} cx="70.3832" cy="40.5175" r="12.0793" transform="rotate(0.038969 70.3832 40.5175)" fill="white" />
                  <circle ref={eye} cx="73.0779" cy="40.6964" r="7.32678" transform="rotate(0.038969 73.0779 40.6964)" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_13_23">
                    <rect width="176" height="176" fill="white" transform="matrix(-1 0 0 1 176 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="f2">
              {stringIn}
            </div>
          </div>
        </main>

        <div className="buttons-wrapper">
          <button className='header__restart-button' type='button' onClick={restartHandler}>
            <img src="restart.svg" alt="" />
          </button>
          <button className='header__mode-button' type='button' onClick={darkModeHandler}>
            <img src={darkMode ? "light-mode.svg" : "dark-mode.svg"} alt="" />
          </button>
        </div>
      </div>
    </div>

  )
}

export default App
