import { writable } from 'svelte/store';
export enum Day {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}
export const selectedTab = writable<'home' | 'profile' | 'calendar'>('home');

// Define a new interface for TimeToTake
export interface TimeToTake {
    date: Date;
    isTaken: boolean;
}

// Modify the Medication interface to use TimeToTake
export interface Medication {
    name: string;
    timesToTake: TimeToTake[];
    daysToTake: Day[];
}


export const medications = writable<Medication[]>([
    {
        name: 'Medicine 1',
        timesToTake: [
            { date: new Date(0, 0, 0, 8, 0), isTaken: false }, // 8:00 AM
            { date: new Date(0, 0, 0, 15, 0), isTaken: false } // 3:00 PM
        ],
        daysToTake: [Day.Monday, Day.Wednesday, Day.Friday]
    },
    {
        name: 'Medicine 2',
        timesToTake: [
            { date: new Date(0, 0, 0, 9, 0), isTaken: true }, // 9:00 AM
            { date: new Date(0, 0, 0, 17, 0), isTaken: true } // 5:00 PM
        ],
        daysToTake: [Day.Tuesday, Day.Thursday]
    },
    // ... more medications if necessary
]);