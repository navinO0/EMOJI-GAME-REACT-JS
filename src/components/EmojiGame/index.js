import {Component} from 'react'

import NavBar from '../NavBar/index'

import WinOrLoseCard from '../WinOrLoseCard/index'

import EmojiCard from '../EmojiCard/index'

import './index.css'

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.
class EmojiGame extends Component {
  state = {
    updatedList: [],
    clickedEmojis: [],
    score: 0,
    lostMatch: false,
    maxScore: 0,
  }

  shuffledEmojisList = () => {
    const {updatedList} = this.state
    const {emojisList} = this.props
    this.setState({updatedList: updatedList.sort(() => Math.random() - 0.5)})
    return emojisList.sort(() => Math.random() - 0.5)
  }

  Scores = id => {
    const {clickedEmojis, score} = this.state

    if (clickedEmojis.includes(id) || score === 12) {
      this.setState({lostMatch: true})
    } else {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
        score: prevState.score + 1,
      }))
    }
  }

  PlayAgain = () => {
    const {score, maxScore} = this.state
    this.setState({score: 0, lostMatch: false, clickedEmojis: []})
    if (parseInt(score) > parseInt(maxScore)) {
      this.setState({maxScore: score})
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, lostMatch, maxScore} = this.state
    return (
      <div className="main-container">
        <NavBar score={score} maxScore={maxScore} />
        <div className="actual-container">
          {!(lostMatch || score === 12) && (
            <ul className="game-card-container">
              {emojisList.map(eachOne => (
                <EmojiCard
                  eachOne={eachOne}
                  shuffledEmojisList={this.shuffledEmojisList}
                  Scores={this.Scores}
                  key={eachOne.id}
                />
              ))}
            </ul>
          )}
          {(lostMatch || score === 12) && (
            <div className="win-or-lose-container">
              <WinOrLoseCard
                PlayAgain={this.PlayAgain}
                maxScore={maxScore}
                score={score}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
