export const routes = {
  HOME: {
    INDEX: "/",
    //DEFAULT_PATH: перенаправить на страницу ошибки
  },
  STARSHIPS: {
    INDEX: "/starships",
    DEFAULT_PATH: "/",
  },
  STARSHIPS_DETAILS: {
    INDEX: "/starships/:id",
    DEFAULT_PATH: "/starships",
    createPath: (id) => ["/starships", id].filter(Boolean).join("/"),
  },

  PLANETS: {
    INDEX: "/planets",
    DEFAULT_PATH: "/",
  },
  PLANETS_DETAILS: {
    INDEX: "/planets/:id",
    DEFAULT_PATH: "/planets",
    createPath: (id) => ["/planets", id].filter(Boolean).join("/"),
  },

  PEOPLE: {
    INDEX: "/people",
    DEFAULT_PATH: "/",
  },
  PERSON_DETAILS: {
    INDEX: "/people/:id",
    DEFAULT_PATH: "/people",
    createPath: (id) => ["/people", id].filter(Boolean).join("/"),
  },
};
