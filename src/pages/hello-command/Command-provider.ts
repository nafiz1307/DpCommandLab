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

let redLightIndicator: boolean = false


export function commandOnReciever(command: Command): string {

    const remote = new Remote();
    remote.setCommand(command)

    return remote.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redLightIndicator ? commandOnReciever(new TurnOnRedLight(new Red())) : commandOnReciever(new TurnOffRedLight(new Light()))
            break;

        case "off":
            redLightIndicator=false
            result = redLightIndicator ? commandOnReciever(new TurnOffRedLight(new Red())) : commandOnReciever(new TurnOffRedLight(new Light()))
            break

        case "increase":
            result=redLightIndicator?commandOnReciever(new IncreaseRedLight(new Red())):commandOnReciever(new TurnOffRedLight(new Light()))

            break

        case "decrease":
            console.log("decrease")
            result =redLightIndicator?commandOnReciever(new DecreaseRedLight(new Red())) : commandOnReciever(new TurnOffRedLight(new Light()))
            break

        case "red":
            redLightIndicator = true
            result=redLightIndicator?commandOnReciever(new TurnOnRedLight(new Red())):commandOnReciever(new TurnOffRedLight(new Light()))
            break
        default:

    }
    // @ts-ignore
    return result;

}