import './index.css'

const WinOrLoseCard = props => {
  const {score, PlayAgain, maxScore} = props
  const winLoseText = score >= 12 ? 'You Won' : 'You Lose'
  const imgameForResult =
    score >= 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreText = score > maxScore ? 'Best Score' : 'Score'

  const onclickedAgain = () => {
    PlayAgain()
  }
  return (
    <div className="card-container">
      <div className="result-score-play-again-container">
        <div className="score-container">
          <h1 className="win-r-lose">{winLoseText}</h1>
          <div className="button-and-score ">
            <p className="score-title">{scoreText}</p>
            <p className="score-in-nums">{score}/12</p>
            <button
              type="button"
              onClick={onclickedAgain}
              className="PlayAgainButton"
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="image-container">
          <img
            src={imgameForResult}
            alt="win or lose"
            className="result-image-with-emojibaloons"
          />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
