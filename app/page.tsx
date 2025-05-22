import MalItem from "@/components/MalItem";
import { List, ListItem } from "@mui/material";

export default async function Home() {
	const response = await fetch(
		"http://localhost:3000/api/send_request?id=16498",
		{
			method: "GET",
		}
	);

	return (
		<List>
			<ListItem>
				<MalItem></MalItem>
			</ListItem>
		</List>
	);
}
