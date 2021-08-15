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