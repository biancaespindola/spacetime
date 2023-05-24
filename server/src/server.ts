import fastify from 'fastify';

const app = fastify();

//HTTP methods: GET POST PUT DELETE PATCH

app.get('/hello', () => {
	return 'Good morning!';
});

app.listen({
	port: 3333,
}).then(() => {
	console.log('Server listening on port 3333 😊');
});
