import {
  Light,
  Command,
  TurnOnRedLight,
  TurnOffCommand,
  TurnOnCommand,
  TurnOffRedLight,
  Red,
  IncreaseRedLight,
  DecreaseRedLight,
  Remote,
} from "./Light";

const remote = new Remote();
const light = new Light();
const redLight = new Red();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);
const turRedLightOn = new TurnOnRedLight(redLight);
const turnOffRedLight = new TurnOffRedLight(redLight);
const increaseRedLight = new IncreaseRedLight(redLight);
const decreaseRedLight = new DecreaseRedLight(redLight);

let redLightFlag = false;



let lightController=(command : string)=>{
    if(command=='on'){
        remote.setCommand(turnOnCommand)
        remote.executeCommand()
    }
    else if(command=='off'){
        remote.setCommand(turnOffCommand)
        remote.executeCommand()
    }

    else if(command=='red-light-on'){
        redLightFlag = true;
        remote.setCommand(turRedLightOn)
        remote.executeCommand()
    }
    else if(command=='increase' && redLightFlag){
        remote.setCommand(increaseRedLight)
        remote.executeCommand()
    }
    else if(command=='decrease' && redLightFlag){
        remote.setCommand(decreaseRedLight)
        remote.executeCommand()
    }

}
