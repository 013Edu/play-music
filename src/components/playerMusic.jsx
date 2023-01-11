import { App, Control, Player, TrackTime } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward, faPlay } from "@fortawesome/free-solid-svg-icons";
import './style.css'

export default function PlayerMusic() {
  return (
    <App>
      <Player id="player-1" className="player">
       <div className="wrapper">
       <img src="https://images.unsplash.com/photo-1672626923259-198229601a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Capa do cd - Rocketseat" />
       <div className="info">
       <h1>Acorda Devinho</h1>
       <p>Banda Rocketseat</p>
       </div>
       <div className="controls">
       <Control>
        <FontAwesomeIcon className="color me-5" icon={faBackward} />
       </Control>
       <Control>
        <FontAwesomeIcon className="color" icon={faPlay} />
       </Control>
       <Control>
       <FontAwesomeIcon className="color" icon={faForward} />
       </Control>
       </div>
        <div className="track">
        </div>
       <TrackTime>
        <div className="time">
          <div className="total-time">03:20</div>
          <div className="last-time">00:12</div>
          </div>
       </TrackTime>
       </div>
      </Player>
      <Player id="player-2" className="player">
        <div className="wrapper">
          <div className="info-wrapper">
          <img src="https://images.unsplash.com/photo-1672626923259-198229601a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Capa do cd - Rocketseat" />
       <div className="info">
       <h1>Acorda Devinho</h1>
       <p>Banda Rocketseat</p>
       </div>
          </div>
          <div className="controls horizontal">
       <Control>
        <FontAwesomeIcon className="color me-5" icon={faBackward} />
       </Control>
       <Control>
        <FontAwesomeIcon className="color" icon={faPlay} />
       </Control>
       <Control>
       <FontAwesomeIcon className="color" icon={faForward} />
       </Control>
       </div>
       <div className="track">
        </div>
       <TrackTime>
        <div className="time">
          <div className="total-time">03:20</div>
          <div className="last-time">00:12</div>
          </div>
       </TrackTime>
        </div>
      </Player>
      <Player id="player-3" className="player">
      <div className="wrapper">
          <div className="info-wrapper">
          <img src="https://images.unsplash.com/photo-1672626923259-198229601a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Capa do cd - Rocketseat" />
       <div className="info">
       <h1>Acorda Devinho</h1>
       <p>Banda Rocketseat</p>
       </div>
          </div>
          <div className="controls horizontal">
       <Control>
        <FontAwesomeIcon className="color me-5" icon={faBackward} />
       </Control>
       <Control>
        <FontAwesomeIcon className="color" icon={faPlay} />
       </Control>
       <Control>
       <FontAwesomeIcon className="color" icon={faForward} />
       </Control>
       </div>
        </div>
      </Player>
    </App>
  )
}
