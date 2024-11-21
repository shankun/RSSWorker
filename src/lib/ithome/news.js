
let deal = async (ctx) => {
	const res = await fetch(`https://www.ithome.com/rss/`);
	ctx.header('Content-Type', 'application/xml');
	return ctx.body(res);
};

let setup = (route) => {
	route.get('/ithome', deal);
};

export default { setup };
