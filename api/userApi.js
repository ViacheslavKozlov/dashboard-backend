const express = require("express");
const router = express.Router();
const { userControllers } = require("../controllers");
const authorization = require("../middlewares/authMiddleware.js");

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserRegistration:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          name:
 *            type: string
 *            description: user name
 *          email:
 *            type: string
 *            description: user email
 *          password:
 *            type: string
 *            description: user password
 *        example:
 *          name: username
 *          email: email@email.com
 *          password: password
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: API to manage users
 */

/**
 * @swagger
 *    api/users/signup:
 *    post:
 *      summary: User registration
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserRegistration'
 *      responses:
 *        "201":
 *          description: created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserRegistration'
 */
router.post("/signup", userControllers.signup);
/**
 * @swagger
 *  components:
 *    schemas:
 *      UserLogin:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: user email
 *          password:
 *            type: string
 *            description: user password
 *        example:
 *          email: email@email.com
 *          password: password
 */

/**
 * @swagger
 *    api/users/login:
 *    post:
 *      summary: User login
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLogin'
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserLogin'
 */
router.post("/login", userControllers.login);

/**
 * @swagger
 *    api/users/logout:
 *    post:
 *      summary: User logout
 *      tags: [User]
 *      responses:
 *        "204":
 *          description: OK
 */
router.post("/logout", authorization, userControllers.logout);

module.exports = router;
