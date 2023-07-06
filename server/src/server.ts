import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();
//HTTP methods: GET POST PUT DELETE PATCH

app.get('/users', async () => {
	const users = await prisma.user.findMany();

	return users;
});

app.listen({
	port: 3333,
}).then(() => {
	console.log('Server listening on port 3333 😊 ihuu');
});
