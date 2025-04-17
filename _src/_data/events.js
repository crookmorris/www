import fetch from 'node-fetch';

export default async function() {
	let url = "https://www.crookmorris.org.uk/programme_api.php";

	return await fetch(url)
		.then(data => data.json())
};
