const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: {
      database: 'co_op_events'
      // user,
      // password
    }
  },
  test: {
    connection: {
      database: 'co_op_events_test'
      // user,
      // password
    }
  }
};

// const log = console.log;
// console.log = (...args) => {
//   if (!/FsMigrations/.test(args[0])) log(...args);
// };

module.exports = { ...customConfig[ENV], ...baseConfig };
