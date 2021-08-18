import { SvelteComponent } from "svelte";

interface Icommand {
    execute(): void
    unexecute(): void
}

export class Light {
    private readonly light: SvelteComponent
    get_light(): SvelteComponent {
        return this.light
    }
    constructor(light : SvelteComponent) {
        this.light = light;
    }
    private redIndicator = 0;
    private isRed = false;
    private isOn = true;
    public turnOn():void {
        this.light.src = `./images/light-receiver/on.png`
        this.isOn = true
        this.isRed = false
    }
    public turnOff():void {
        this.isOn = false;
        this.light.src = `./images/light-receiver/off.png`
    }
    public turnOnRed(): void{
        if(this.isOn){
             this.isRed = true;
             this.switchRedLight();
        }
    }
    public increaseredIndicator(): void{
        if(this.redIndicator < 3){
            this.redIndicator += 1
            this.switchRedLight()
        }

    }
    public decreaseredIndicator(): void{
        if(this.redIndicator > 0){
            this.redIndicator -= 1
            this.switchRedLight()
        }
    }
    public switchRedLight(): void{
        if(this.isRed && this.isOn){
            this.light.src = `./images/light-receiver/red/${this.redIndicator}.png`;
            console.log('switch' + this.redIndicator)
        }
    }
}

class ConcretePowerCommand implements Icommand {
    private light: Light
    constructor(light : Light) {
        this.light = light;
    }
    execute(): void {
        this.light.turnOn()
    }
    unexecute(): void {
        this.light.turnOff()
    }
}
class ConcreteRedCommand implements Icommand {
    private light: Light
    constructor(light : Light) {
        this.light = light;
    }
    execute(): void {
        this.light.turnOnRed()
    }
    unexecute(): void {
        this.light.turnOn()
    }
}

class ConcreteIntesifyCommand implements Icommand {
    private light: Light
    constructor(light : Light) {
        this.light = light;
    }
    execute(): void {
        this.light.increaseredIndicator()
    }
    unexecute(): void {
        this.light.decreaseredIndicator()
    }
}

export class Invoker {
    concretePowerCommand: ConcretePowerCommand;
    concreteRedCommand: ConcreteRedCommand;
    concreteIntesifyCommand: ConcreteIntesifyCommand;
    constructor(lightComponent: SvelteComponent){
        const light = new Light(lightComponent)
        this.concretePowerCommand = new ConcretePowerCommand(light)
        this.concreteRedCommand = new ConcreteRedCommand(light)
        this.concreteIntesifyCommand = new ConcreteIntesifyCommand(light)
    }
    executeCommand(command: string){
        console.log(command)
        switch(command){
            case "power":
                this.concretePowerCommand.execute()
                break
            case "red":
                this.concreteRedCommand.execute()
                break
            case "redIntensify":
                this.concreteIntesifyCommand.execute()
                break
        }
    }
    unexecuteCommand(command: string){
        console.log(command)
        switch(command){
            case "power":
                this.concretePowerCommand.unexecute()
                break
            case "red":
                this.concreteRedCommand.unexecute()
                break
            case "redIntensify":
                this.concreteIntesifyCommand.unexecute()
                break
        }
    }
}