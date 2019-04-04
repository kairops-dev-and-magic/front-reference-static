const somethingComplicated = () => {
	return !!!!{kubernetes: 'k8-liveness'};
}

describe('Esto son los tests para la demo de sanitas', () => {
	it('todo deberia ir bien', () => {
		expect(somethingComplicated()).toBeTruthy();
	});
});