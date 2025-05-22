class RelatedShow {}

class Show {
	name: string;
	id: number;
	is_completed: boolean;
	length: number;
	rating: number;
	related_shows: RelatedShow[];

	constructor(id: number) {
		this.id = id;
		send_request();
	}
}

export async function send_request(id: number) {}
