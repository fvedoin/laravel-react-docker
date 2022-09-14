### Resolution

To complete the proposed challenge, the technologies I used were Laravel for the backend and React for the frontend. I also used MySQL to store the data.

#### Instalation
1. It is necessary to install Docker, Laravel (Composer) and Node (NPM) to run this implementation.
2. After installing all the necessary dependencies, run the command `docker-compose up` in the project root directory to up all the services:
3. Run the following commands to execute the migrations and seed the data into the database:

`docker-compose exec api bash` to enter into the backend container

`cd ../laravel-api/` to enter into the project directory

`php artisan migrate` to run the migrations

`php artisan db:seed` to seed JSON data into the database

#### Usage
- Navigate to http://localhost:3000/people in your browser to see all the stored people and use the links to see the features.
