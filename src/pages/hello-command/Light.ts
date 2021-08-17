export interface Command{
    execute() : string ;
}

export class Light {

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}

export class Red{
    value : number = 0;

    public on(): string {
        return "on"
    }

    public off(): string{
        return "off"
    }

    public increaseLight() : string{
        this.value++;
        return this.value.toString()
    }

    public decreaseLight(): string{
        this.value--;
        return this.value.toString()
    }
}

export class TurnOnCommand implements Command{
    private _light : Light

    constructor(_light: Light){
        this._light = _light;
    }

    execute(): string{
        return this._light.on();
    }
}

export class TurnOffCommand implements Command{
    private _light : Light

    constructor(_light: Light){
        this._light = _light;
    }

    execute(): string{
        return this._light.off();
    }
}

export class TurnOnRedLight implements Command{
    light : Red;

    constructor(light:Red){
        this.light = light;
    }
    execute(): string{
        return this.light.on()
    }
}

export class TurnOffRedLight implements Command{
    light : Red;

    constructor(light:Red){
        this.light = light;
    }
    execute(): string{
        return this.light.off()
    }
}

export class IncreaseRedLight implements Command{
    light : Red;

    constructor(light : Red){
        this.light = light;
    }
    execute(): string{
        return this.light.increaseLight()
    }
}

export class DecreaseRedLight implements Command{
    light : Red;

    constructor(light : Red){
        this.light = light;
    }
    execute(): string{
        return this.light.decreaseLight()
    }
}

export class Remote{
    onCommand!: Command;

    constructor(){

    }

    setCommand(onCommand : Command){
        this.onCommand = onCommand;
    }

    executeCommand(){
        return this.onCommand.execute()
    }

}
