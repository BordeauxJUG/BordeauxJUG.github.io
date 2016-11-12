import {Date} from './date.model';
import {Location} from './location.model';

export class Meeting {
    id: string;
    name: string;
    date: Date;
    nbAttendees: number;
    registrationLink: string;
    description: string;
    location: Location;
}