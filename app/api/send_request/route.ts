import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const id = req.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json({ status: 400, message: "No id supplied" });
	} else {
		const request = new Request(
			`https://api.myanimelist.net/v2/anime/${id}?fields=id,title,alternative_titles,status,num_episodes,mean,related_anime,start_season,genres`
		);
		request.headers.append(
			"Authorization",
			`Bearer ${process.env.ACCESS_TOKEN}`
		);

		const json = await fetch(request).then((response) => {
			if (!response.ok) {
				throw new Error("ERROR: non-200 status returned from MAL");
			}
			return response.json();
		});
		console.log(json);
		return NextResponse.json({ status: 200 });
	}
}
