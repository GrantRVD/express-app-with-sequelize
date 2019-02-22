# Why?

I've wanted to get better with web dev tools for a while, and making this minimum viable landing page based on a FreeCodeCamp tutorial was a good way to do that while also figuring out how to make such an app work with a Postgres database.

# How?

If you want to run this, clone the respository, open a terminal, and run `npm install` followed by `DEBUG=express-app:* npm start` to open the app on `localhost:3000`. You can also use `DEBUG=express-app:* npm run dev` instead if you want to run the app with `nodemon,` which will automatically restart if you modify any of the .js files with your own code. To load up the database, you can execute `sequelize db:migrate` in a second terminal

# Disclaimer

It's unlikely I will maintain this repository after the initial push, so please repurpose the materials here at your own risk.
