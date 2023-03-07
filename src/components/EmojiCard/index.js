// Write your code here.
// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachOne, shuffledEmojisList, Scores} = props
  const {emojiName, emojiUrl, id} = eachOne
  const clickedOn = () => {
    Scores(id)
    shuffledEmojisList()
  }

  return (
    <li className="">
      <button type="button" onClick={clickedOn} className="emoji-li-container">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
