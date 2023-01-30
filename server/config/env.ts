function getValidPort(port: unknown): number {
	let PORT: number = Number.parseInt(`${port}`);
	return Number.isNaN(PORT)
		? (console.log(".env PORT invalid/inexistent"), 5500)
		: PORT;
}
const PORT = getValidPort(process.env.PORT);
export default PORT;
