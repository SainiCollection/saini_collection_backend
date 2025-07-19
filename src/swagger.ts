import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { config } from 'dotenv'

config();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: `Saini Collection API`,
            version: `1.0.0`,
            description: `API documentation for the Saini Collection`
        },
        servers: [{
            url: `${process.env.BASE_SERVER_URL}/api/v1/sc`
        }]
    },
    apis: ["./src/route/**/*.ts"]
};

const swaggerSpec = swaggerJsDoc(options);
export { swaggerSpec, swaggerUi }
