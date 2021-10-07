export enum Players {
    One = 'X',
    Two = 'O'
}

export interface IMoveOrder {
    [key: number]: Players;
}