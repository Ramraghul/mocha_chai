const swaggerJsdoc = require('swagger-jsdoc');
const BaseUrlVersion = "v1/learnEnd";
require('dotenv');
const port = process.env.PORT
const option = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'RestFull API with Testing using Mocha and chai',
            description: 'This is the Rest API learning project. Learning tech unit testing tools using [mocha](https://mochajs.org) and [chai](http://chai.com)',
            version: '1.0.1',
            termsOfService: 'https://google.com',
            contact: {
                name: 'Raghul Shetty',
                url: 'https://google.com',
                email: 'raghul@uitoux.in',
            },
            license: {
                name: 'MIT License',
                url: 'https://google.com'
            },
            extensions: {
                'x-organization': 'UITOUX'
            }
        },
        servers: [
            {
                url: `http://localhost:${port}/`,
                description: 'Development Server'
            },
            {
                url: `http://localhost:${port}/`,
                description: 'Production Server'
            }
        ],
        security: [
            {
                'ApiKeyAuth': []
            }
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization'
                }
            }
        },
        paths: {
            [`/${BaseUrlVersion}`]: {
                get: {
                    tags: ['Route Test'],
                    summary: 'Check if the GET method is working',
                    description: 'This API is used to check if the GET method is working or not',
                    responses: {
                        '200': {
                            description: 'This RESTful API is successfully working',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Success',
                                        data: { message: 'Welcome to new learn' }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/all_user`]: {
                get: {
                    tags: ['User'],
                    summary: 'Get all data from DataBase',
                    description: 'This API is used to get all user list from user DataBase',
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            message: {
                                                type: 'string',
                                                example: 'Success',
                                                description: 'API success message'
                                            },
                                            data: {
                                                type: 'object',
                                                properties: {
                                                    users: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'object',
                                                            properties: {
                                                                userId: {
                                                                    type: 'number',
                                                                    example: 1,
                                                                    description: 'User ID'
                                                                },
                                                                first_name: {
                                                                    type: 'string',
                                                                    example: 'Smart',
                                                                    description: 'First name of the user'
                                                                },
                                                                last_name: {
                                                                    type: 'string',
                                                                    example: 'Shetty',
                                                                    description: 'Last name of the user'
                                                                },
                                                                mobile_number: {
                                                                    type: 'number',
                                                                    example: 1234567890,
                                                                    description: 'Mobile number of the user'
                                                                },
                                                                email: {
                                                                    type: 'string',
                                                                    example: 'test@gmail.com',
                                                                    description: 'Email address of the user'
                                                                },
                                                                is_active: {
                                                                    type: 'string',
                                                                    example: 'Active',
                                                                    description: 'Status of the user'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        message: 'Success',
                                        data: {
                                            users: [
                                                {
                                                    userId: 1,
                                                    first_name: 'Smart',
                                                    last_name: 'Shetty',
                                                    mobile_number: 1234567890,
                                                    email: 'test@gmail.com',
                                                    is_active: 'Active'
                                                },
                                                {
                                                    userId: 2,
                                                    first_name: 'Kerthik',
                                                    last_name: 'Pattal',
                                                    mobile_number: 9876543210,
                                                    email: 'test1@gmail.com',
                                                    is_active: 'Active'
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/create_newUser`]: {
                post: {
                    tags: ['User'],
                    summary: 'Create a new user',
                    description: 'This API is used to create a new user in the user DataBase',
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        first_name: {
                                            type: 'string',
                                            example: 'Smart',
                                            description: 'First name of the user'
                                        },
                                        last_name: {
                                            type: 'string',
                                            example: 'Shetty',
                                            description: 'Last name of the user'
                                        },
                                        mobile_number: {
                                            type: 'number',
                                            example: 1234567890,
                                            description: 'Mobile number of the user'
                                        },
                                        email: {
                                            type: 'string',
                                            example: 'test@gmail.com',
                                            description: 'Email address of the user'
                                        },
                                        is_active: {
                                            type: 'string',
                                            example: 'Active',
                                            description: 'Status of the user'
                                        }
                                    },
                                    required: ['userId', 'first_name', 'last_name', 'mobile_number', 'email', 'is_active'] // Specify the required properties
                                },
                                example: {
                                    first_name: 'Smart',
                                    last_name: 'Shetty',
                                    mobile_number: 1234567890,
                                    email: 'test@gmail.com',
                                    is_active: 'Active'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: {
                                                type: 'string',
                                                example: 'Success',
                                                description: 'New User Successfully created'
                                            },
                                            message: {
                                                type: 'string',
                                                example: 'New User Successfully created',
                                                description: 'API success message'
                                            }
                                        }
                                    },
                                    example: {
                                        status: 'Success',
                                        message: 'New User Successfully created',
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/getuserbyid/{id}`]: {
                get: {
                    tags: ['User'],
                    summary: 'Get data from DataBase Based On User Id',
                    description: 'This API is used to get user data from user DataBase based on user Id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            schema: {
                                type: 'number',
                                example: 1,
                                description: 'User ID'
                            },
                            required: true,
                            description: 'User ID parameter'
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            first_name: {
                                                type: 'string',
                                                example: 'Smart',
                                                description: 'First name of the user'
                                            },
                                            last_name: {
                                                type: 'string',
                                                example: 'Shetty',
                                                description: 'Last name of the user'
                                            },
                                            mobile_number: {
                                                type: 'number',
                                                example: 1234567890,
                                                description: 'Mobile number of the user'
                                            },
                                            email: {
                                                type: 'string',
                                                example: 'test@gmail.com',
                                                description: 'Email address of the user'
                                            },
                                            is_active: {
                                                type: 'string',
                                                example: 'Active',
                                                description: 'Status of the user'
                                            }
                                        }
                                    },
                                    example: {
                                        first_name: 'Smart',
                                        last_name: 'Shetty',
                                        mobile_number: 1234567890,
                                        email: 'test@gmail.com',
                                        is_active: 'Active'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User not found',
                                        error: 'User not found'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/updateuserbyid/{id}`]: {
                put: {
                    tags: ['User'],
                    summary: 'Update data Based On User Id',
                    description: 'This API is used to update user data based on user Id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            schema: {
                                type: 'string',
                                example: '1',
                                description: 'User ID'
                            },
                            required: true,
                            description: 'User ID parameter'
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        first_name: {
                                            type: 'string',
                                            example: 'Updated First Name',
                                            description: 'Updated first name of the user'
                                        },
                                        last_name: {
                                            type: 'string',
                                            example: 'Updated Last Name',
                                            description: 'Updated last name of the user'
                                        },
                                        mobile_number: {
                                            type: 'number',
                                            example: 9876543210,
                                            description: 'Updated mobile number of the user'
                                        },
                                        email: {
                                            type: 'string',
                                            example: 'updatedemail@example.com',
                                            description: 'Updated email address of the user'
                                        },
                                        is_active: {
                                            type: 'string',
                                            example: 'Updated',
                                            description: 'Updated status of the user'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User updated successfully'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User not found',
                                        error: 'User not found'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/userbyname/{name}`]: {
                get: {
                    tags: ['User'],
                    summary: 'Get data from DataBase Based On User Name',
                    description: 'This API is used to get user data from user DataBase based on user Name',
                    parameters: [
                        {
                            in: 'path',
                            name: 'name',
                            schema: {
                                type: 'string',
                                example: 'Updated First Name',
                                description: 'User Name'
                            },
                            required: true,
                            description: 'User Name Parameter'
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            first_name: {
                                                type: 'string',
                                                example: 'Smart',
                                                description: 'First name of the user'
                                            },
                                            last_name: {
                                                type: 'string',
                                                example: 'Shetty',
                                                description: 'Last name of the user'
                                            },
                                            mobile_number: {
                                                type: 'number',
                                                example: 1234567890,
                                                description: 'Mobile number of the user'
                                            },
                                            email: {
                                                type: 'string',
                                                example: 'test@gmail.com',
                                                description: 'Email address of the user'
                                            },
                                            is_active: {
                                                type: 'string',
                                                example: 'Active',
                                                description: 'Status of the user'
                                            }
                                        }
                                    },
                                    example: {
                                        first_name: 'Smart',
                                        last_name: 'Shetty',
                                        mobile_number: 1234567890,
                                        email: 'test@gmail.com',
                                        is_active: 'Active'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Please try first name',
                                        error: 'Please try first name'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/deletebyid/{id}`]: {
                put: {
                    tags: ['User'],
                    summary: 'Update data Based On User Id',
                    description: 'This API is used to update user data based on user Id',
                    parameters: [
                        {
                            in: 'path',
                            name: 'id',
                            schema: {
                                type: 'string',
                                example: '1',
                                description: 'User ID'
                            },
                            required: true,
                            description: 'User ID parameter'
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        is_active: {
                                            type: 'string',
                                            example: 'On',
                                            description: 'Updated status of the user'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User Activate successfully'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not Found',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'User not found',
                                        error: 'User not found'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        message: 'Internal Server Error',
                                        error: 'Something went wrong'
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        tags: [
            {
                name: 'Route Test',
                description: 'Testing For Route Working or not'
            },
            {
                name: 'User',
                description: 'CRED For User'
            },
        ]
    },
    apis: [
        './src/router/user.controller.js'
    ]
};

const swaggerSpec = swaggerJsdoc(option);

module.exports = {
    swaggerSpec
};