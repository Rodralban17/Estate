import { register}  from "../controllers/auth.controller.js";
import httpMocks from 'node-mocks-http'; // For mocking HTTP requests/responses
import { PrismaClient } from '@prisma/client'; // Import Prisma Client

// Create a mock instance of the Prisma Client
const mockPrisma = {
    user: {
        findUnique: jest.fn(),
    },
};
jest.mock('@prisma/client', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => mockPrisma),
    };
});


describe('Auth Controller - Login', () => {
    let req, res;

    beforeEach(() => {
        req = httpMocks.createRequest({
            body: {
                username: "existingUser",
                email: "user@example.com",
                phonenumber: "1234567890",
                password: "password123",
            },
        });
        res = httpMocks.createResponse();
    });

    it('should send a status code of 400 when user exists', async () => {
        // Mock the findUnique method to simulate a user existing
        mockPrisma.user.findUnique.mockResolvedValueOnce({ username: "existingUser" });

        await register(req, res);

        expect(res.statusCode).toBe(400); // Expecting a 400 status code
        expect(res._getData()).toEqual(expect.objectContaining({ error: "User already exists" })); // Adjust based on your error response
    });

    // Additional tests can go here
});