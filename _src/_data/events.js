import fetch from "node-fetch";

export default async function () {
	console.log("Fetching new github stargazers count…");

    let token = "token="+process.env.MORRISBOOK_TOKEN;

    // horrible and may get the date wrong in non-UTC timezones
    // but we're running on github so ... we're ok maybe?
    let from = "from="+new Date().toISOString().split('T')[0]

	let res = await fetch("https://morrisbook.co.uk/api/v1/events?"+token+"&"+from+"&status=1");
	return await res.json();
};