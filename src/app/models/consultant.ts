import { Skill } from '../models/skill';

export class Consultant {
	id: string;
	name: string;
	age: number;
	role: string;
	skills: Skill[];
}