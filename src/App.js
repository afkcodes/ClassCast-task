import './App.css';
import { BsThreeDots } from 'react-icons/bs';
import HealthComponent from './Components/Health/HealthComponent';
import TrainingBox from './Components/Training/TrainingBox';
import UserIcons from './Components/UserIcons/UserIcons';
import UserInfo from './Components/UserInfo/User';
import Signup from './Components/Signup/Signup';
import Trainer from './Components/Trainers/Trainer';

function App() {
  return (
    <div className="App">
      <div className="main">Main Content Goes Here</div>
      <div className="side__bar">
        <div className="user">
          <div className="user__info">
            <UserInfo />
          </div>
          <div className="user__settings">
            <UserIcons />
          </div>
        </div>
        <div className="health">
          <div className="health__data">
            <HealthComponent
              iconFillStyle={{ color: '#95BEFC' }}
              background={{ backgroundColor: '#4D94FA' }}
              sleepTime="6:25"
              unit="Hours"
              innerConatainerColor={{ backgroundColor: '#4D94FA' }}
              type="sleep"
            />
            <HealthComponent
              iconFillStyle={{ color: '#F7AAA4' }}
              background={{ backgroundColor: '#F47167' }}
              sleepTime="120"
              unit="Bpm"
              innerConatainerColor={{ backgroundColor: '#F47167' }}
              type="heart"
            />
            <HealthComponent
              iconFillStyle={{ color: '#A9E2A1' }}
              background={{ backgroundColor: '#6FCE63' }}
              sleepTime="6:25"
              unit="Kcal"
              innerConatainerColor={{ backgroundColor: '#6FCE63' }}
              type="energy"
            />
          </div>
          <Signup />
        </div>
        <div className="todays_training">
          <TrainingBox
            trainingType="Box"
            trainingTime="10:00"
            warmUpDuration="40"
            trainingExcerciseTime="20"
            trainingExcercise="Stretch"
            backGroundColor={{ background: '#4E94FA' }}
            fadedColor={{ background: '#C0D9FD' }}
          />
          <TrainingBox
            trainingType="Crossfit"
            trainingTime="12:00"
            warmUpDuration="20"
            trainingExcerciseTime="20"
            trainingExcercise="Pull-ups"
            backGroundColor={{ background: '#F47167' }}
            fadedColor={{ background: '#F8BDC0' }}
          />
          <BsThreeDots size={32} color="gray" />
        </div>
        <div className="trainers">
          <Trainer trainerName="John Kavanagh" profession="MMA Coach" />
          <Trainer trainerName="Jacob Jones" profession="Boxing Coach" />
        </div>
      </div>
    </div>
  );
}

export default App;
