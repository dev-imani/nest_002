# NestJS Guide

<p align="center">
	<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
	A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
	<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
	<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
	<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
	<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
	<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" /></a>
	<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
	<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
	<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us" /></a>
	<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us" /></a>
	<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 🌐 What NestJS Is

NestJS is a progressive Node.js framework for building efficient, scalable server-side applications.

It’s built on top of Express (and optionally Fastify), meaning you can use familiar middleware and packages like passport for authentication without relearning everything.

It’s TypeScript-first, so you get strong typing, decorators, and modern language features out of the box.

### 🔗 Relationship to Express

Express is the most widely used Node.js web framework, but it’s minimalistic—you have to wire up routing, middleware, and structure yourself.

NestJS takes Express (or Fastify) and adds a structured architecture inspired by Angular: modules, controllers, services, dependency injection.

This makes NestJS more suitable for large-scale applications where maintainability and testability matter.

### 💡 Why It’s Useful

- **Consistency:** Provides a clear, opinionated way to organize code (modules, controllers, providers).
- **Scalability:** Built to handle enterprise-level apps, microservices, and GraphQL APIs.
- **Compatibility:** Since it sits on Express, existing Node.js libraries integrate easily.
- **Developer Experience:** CLI scaffolding, decorators, and TypeScript make development faster and less error-prone.

## 🔧 What the CLI Is

The NestJS CLI (`@nestjs/cli`) is a command-line tool that helps you scaffold, generate, and manage NestJS projects.

It’s similar to Angular CLI if you’ve used Angular before—it automates repetitive tasks like creating modules, controllers, and services. Without the CLI, you’d have to manually create files and wire them up in `app.module.ts`.

### 📥 Installation

```bash
npm install -g @nestjs/cli
```

The command does the following:

- `npm install` tells Node’s package manager to install something.
- `-g` installs it globally so you can run the `nest` command from any directory.
- `@nestjs/cli` is the package name for the NestJS CLI.

After installation, verify the CLI and view the available commands:

```bash
nest -v
nest -h
```

### ⚙️ What Happens Under the Hood

The CLI adds a global executable called `nest` that can:

- Scaffold a new project with `nest new project-name`.
- Generate modules, controllers, services, guards, pipes, and more.
- Run and build your app with `nest start` and `nest build`.

It also integrates with package managers such as npm, yarn, and pnpm to install dependencies automatically.

### 🧩 Why It Matters

- **Consistency:** Every project starts with the same structure.
- **Speed:** You don’t waste time wiring imports manually.
- **Best Practices:** The CLI enforces NestJS conventions such as decorators, modules, and providers.
- **Scalability:** As your app grows, you can generate new features cleanly without clutter.

### 🛠️ Advanced CLI Generators

The CLI can also generate feature-specific building blocks for you, which keeps the codebase organized and consistent as your app grows.

#### 🟢 Generating a Module

**Command:**

```bash
nest generate module users
```

**What happens:**

- Creates a new folder such as `users/` inside `src/`.
- Adds a file like `users.module.ts`.
- Automatically registers the module inside `app.module.ts` so you do not have to import it manually.

**Example module:**

```typescript
@Module({
	imports: [],
	controllers: [],
	providers: [],
})
export class UsersModule {}
```

> Think of a module as a container for related features such as controllers and services. It keeps your app organized.

#### 🟡 Generating a Controller

**Command:**

```bash
nest generate controller users
```

**What happens:**

- Creates `users.controller.ts` inside `src/users/`.
- Adds a test file such as `users.controller.spec.ts`.
- Updates `users.module.ts` to include the new controller.

**Example controller:**

```typescript
@Controller('users')
export class UsersController {
	@Get()
	findAll(): string {
		return 'This will return all users';
	}
}
```

> Controllers define routes such as `/users` and handle requests. They are the entry point for client interactions.

#### 🔗 How They Work Together

- `UsersModule` groups everything related to users.
- `UsersController` defines endpoints like `GET /users`.
- Later, you can add a `UsersService` for business logic and inject it into the controller.

So the flow becomes:

```text
AppModule → UsersModule → UsersController → UsersService → Response
```

#### ⚡ Why This Matters

- The CLI saves time by auto-wiring imports.
- It keeps code modular and scalable.
- You can generate other features too, such as `nest generate service`, `nest generate guard`, and `nest generate pipe`.

## 🟢 GET Requests

In a controller, you define methods and decorate them with `@Get()`.

For example, the current app controller exposes a root GET route:

```typescript
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}
```

Visiting `http://localhost:3000/` returns the response from that handler.

You can also define sub-routes:

```typescript
@Get('posts')
findUserPosts() {
	return [{ username: 'Anson', posts: ['Post 1', 'Post 2'] }];
}
```

That maps to `GET /users/posts` when the controller is decorated with `@Controller('users')`.

## 🟡 Nested Routes

NestJS makes it easy to nest routes by passing strings into decorators.

```typescript
@Get('posts/comments')
findUserPostComments() {
	return { post: 'Post 1', comments: ['Nice!', 'Great work'] };
}
```

That maps to `GET /users/posts/comments`.

You can keep nesting as needed, which is useful for hierarchical data like users, posts, and comments.

## 🔵 Returning JSON

Simply return objects or arrays from your controller methods.

NestJS automatically serializes them into JSON responses.

```typescript
@Get()
getUser() {
	return { username: 'Mike', email: 'mike@example.com' };
}
```

The response will look like this:

```json
{
	"username": "Mike",
	"email": "mike@example.com"
}
```

## ⚡ Why This Matters

Controllers define the API surface of your app.

Decorators map methods to routes cleanly, without manually wiring Express routes.

JSON serialization is automatic, so you do not need to call `res.json()` like you would in Express.

## 📂 Key Files in a New NestJS Project

| File | Purpose |
| --- | --- |
| `main.ts` | Entry point of the application. Bootstraps the app with `NestFactory.create(AppModule)` and is a common place for global middleware, pipes, filters, or libraries. |
| `app.module.ts` | Root module of the application. Modules group related controllers and providers. Every NestJS app needs at least one root module. |
| `app.controller.ts` | Handles incoming requests and returns responses. Routes are defined with decorators such as `@Get()` and `@Post()`. |
| `app.service.ts` | Holds business logic and is injected into controllers through Nest’s dependency injection system. |

### How They Work Together

`main.ts` bootstraps the app with `AppModule`.

`AppModule` registers controllers and providers.

`AppController` defines endpoints such as `/hello`.

`AppService` provides the logic that `AppController` calls.

So when you hit `http://localhost:3000/`, the request flows like this:

```text
main.ts → AppModule → AppController → AppService → response
```

### Example Snippets

#### `main.ts`

```typescript
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
```

#### `app.module.ts`

```typescript
@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
```

#### `app.controller.ts`

```typescript
@Controller()
export class AppController {
	@Get()
	getHello(): string {
		return 'Hello World!';
	}
}
```

#### `app.service.ts`

```typescript
@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello from the service!';
	}
}
```

## NestJS Architecture and Features

Building on the fundamental concepts introduced in the sources, here are more specific details regarding the architecture and features of NestJS.

### 1. Framework Foundation and Setup

NestJS is a back-end framework for Node.js built on top of Express, meaning many Express-compatible modules such as Passport work seamlessly within it. It is heavily inspired by Angular, using a similar modular architecture and TypeScript-first approach.

To get started, use the Nest CLI:

```bash
npm i -g @nestjs/cli
```

Project creation:

```bash
nest new <project-name>
```

This scaffolds a project with a root module, controller, and service.

Development mode:

```bash
npm run start:dev
```

This enables watch mode, which automatically reloads the application when code changes are detected.

### 2. Core Architectural Building Blocks

- **Modules:** The basic organizational unit. Every app has a root module (`app.module.ts`), and the CLI links new modules into this root to maintain the application tree.
- **Controllers:** Handle incoming requests and return responses. They use decorators like `@Get()`, `@Post()`, `@Put()`, and `@Delete()` to define routes.
- **Services (Providers):** Hold business logic. Keeping logic in services helps controllers stay focused on the HTTP layer.

### 3. Request Handling and Data Validation

NestJS provides tools to safely manage incoming data:

- **DTOs (Data Transfer Objects):** Classes that define request body schemas, providing type safety and IntelliSense.
- **Validation:** With `class-validator` and `class-transformer`, you can annotate DTOs with decorators such as `@IsNotEmpty` and `@IsEmail`. Applying `ValidationPipe` automatically rejects invalid payloads with `400 Bad Request`.
- **Parameters:** Use `@Param()` for route params and `@Query()` for query params.

### 4. Dependency Injection (DI)

A key NestJS feature is its Inversion of Control (IoC) container. When you mark a class with `@Injectable()`, Nest manages instantiation. Instead of manually creating service instances, you inject them through constructors. This improves memory usage and testability.

### 5. Request Lifecycle Tools

- **Middleware:** Functions that run before route handlers, useful for logging or checking authorization headers.
- **Pipes:** Handle transformation and validation, such as converting string IDs to numbers with `ParseIntPipe`.
- **Guards:** Decide whether a request is allowed based on conditions such as authentication or permissions. If a guard returns `false`, Nest returns `403 Forbidden`.
- **Exception Filters:** Nest includes a built-in exception layer for unhandled errors. You can throw `new HttpException()` to return standardized status codes and error responses.

## 🟢 POST Requests

### Defining a POST Route

Inside your controller, you create a method and decorate it with `@Post()`:

```typescript
@Controller('users')
export class UsersController {
  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('User created!');
  }
}
```

- `@Post()` → maps this method to POST /users.
- `@Req()` → injects the request object (from Express).
- `@Res()` → injects the response object (from Express).

You can now access `request.body` to see the data sent by the client.

### 🟡 Handling Request Bodies

NestJS automatically parses JSON request bodies (unlike Express, where you need body-parser).

Example request body:

```json
{
  "username": "Mike",
  "email": "mike@example.com"
}
```

When you send this via Postman, `request.body` will log the parsed object:

```javascript
{ username: 'Mike', email: 'mike@example.com' }
```

### 🔵 Testing with Postman

1. Open Postman (or use curl/PowerShell).
2. Select POST as the method.
3. Enter the URL: `http://localhost:3000/users`.
4. In the Body tab, choose raw and JSON.
5. Paste:

```json
{
  "username": "Mike",
  "email": "mike@example.com"
}
```

6. Hit Send.

You'll see:

- Status: 201 Created (NestJS sets this automatically for POST).
- Response: "User created!".
- Console log: `{ username: 'Mike', email: 'mike@example.com' }`.

### ⚡ Key Points

- NestJS uses Express under the hood, so request/response objects are familiar.
- `@Req()` and `@Res()` decorators give you direct access to them.
- JSON bodies are parsed automatically.
- Default response status for POST is 201 Created.
- You can extend this to save data to a database, forward it to another service, or validate it with DTOs.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
