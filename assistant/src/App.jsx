import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard.jsx';
import AlexImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';



function App() {
  return (
    <div> Personal Digital Assistant 

      <div className="Container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexImage}/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
