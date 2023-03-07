// Write your code here.
// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, maxScore} = props
  return (
    <div className="nav-bar">
      <div className="name-title">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      <div className="score-topScore">
        {score !== 12 && <p className="score">Score: {score}</p>}
        {score !== 12 && <p className="top-score">Top Score: {maxScore}</p>}
      </div>
    </div>
  )
}

export default NavBar
