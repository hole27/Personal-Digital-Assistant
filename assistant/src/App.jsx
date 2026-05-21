import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard.jsx';
import AlexImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';



function App() {
  return (
    <div> Personal Digital Assistant 
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexImage}/>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage}/>
    </div>
  );
}

export default App;
