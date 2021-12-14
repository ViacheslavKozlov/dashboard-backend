const express = require("express");
const router = express.Router();
const { taskControllers } = require("../controllers");
const authorization = require("../middlewares/authMiddleware.js");
/**
 * @swagger
 * tags:
 *  name: Task
 *  description: API to manage tasks
 */
/**
 

/**
 * @swagger
 *    api/tasks/{taskId}:
 *    delete:
 *      summary: Delete task by task id
 *      description: >
 *        Each task is identified by `id`.
 *        To delete task you should to pass task id in path
 *           
 *      tags: [Task]
 *      responses:
 *        "200":
 *          description:  Success.Task with such `id` removed.
 *        "404":
 *          description: Bad requset. Not found task with such `id`.
 *
 */

router.delete("/:taskId", authorization, taskControllers.deleteTask);
/**
 * @swagger
 *  components:
 *    schemas:
 *      TaskCreationRequestBody:
 *        type: object
 *        required:
 *          - taskName
 *          - taskDate
 *        properties:
 *          isChallenge:
 *            type: boolean
 *            description: default false
 *          difficulty:
 *            type: string
 *            description: one of [easy,normal, hard]. default easy.
 *          taskName:
 *            type: string
 *            description: task name
 *          taskDate:
 *            type: string
 *            description: task date
 *          category:
 *            type: string
 *            description: one of [stuff, family, health, learning, leisure, work]. default stuff.
 *          completed:
 *            type: boolean
 *            description: default false
 *        example:
 *          isChallenge: false
 *          difficulty: easy
 *          taskName: name
 *          taskDate: 2021-11-01
 *          category: stuff
 *          completed: false
 *
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      TaskCreationResponse:
 *        type: object
 *        required:
 *          - taskName
 *          - taskDate
 *        properties:
 *          id:
 *            type: string
 *            descripton: task id
 *          isChallenge:
 *            type: boolean
 *            description: default false
 *          difficulty:
 *            type: string
 *            description: one of [easy,normal, hard]. default easy.
 *          taskName:
 *            type: string
 *            description: task name
 *          taskDate:
 *            type: string
 *            description: task date
 *          category:
 *            type: string
 *            description: one of [stuff, family, health, learning, leisure, work]. default stuff.
 *          completed:
 *            type: boolean
 *            description: default false
 *          owner:
 *            type: string
 *            desription: id of task owner
 *        example:
 *          id: task id
 *          isChallenge: false
 *          difficulty: easy
 *          taskName: name
 *          taskDate: 2021-11-01
 *          category: stuff
 *          completed: false
 *          owner: owner id
 *
 *
 */

/**
 * @swagger
 *    api/tasks/addTask:
 *    post:
 *      summary: Create new task
 *      description: >
 *        Task creation
 *
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskCreationRequestBody'
 *      responses:
 *        "201":
 *          description:  Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/TaskCreationResponse'
 *
 */
router.post("/addTask", authorization, taskControllers.addTask);
/**
 * @swagger
 *  components:
 *    schemas:
 *      AllTaskResponse:
 *
 *          type: array
 *          items:
 *            type: object
 *
 *            properties:
 *              id:
 *                type: string
 *                descripton: task id
 *              isChallenge:
 *                type: boolean
 *                description: default false
 *              difficulty:
 *                type: string
 *                description: one of [easy,normal, hard]. default easy.
 *              taskName:
 *                type: string
 *                description: task name
 *              taskDate:
 *                type: string
 *                description: task date
 *              category:
 *                type: string
 *                description: one of [stuff, family, health, learning, leisure, work]. default stuff.
 *              completed:
 *                type: boolean
 *                description: default false
 *              owner:
 *                type: string
 *                desription: id of task owner
 *
 *
 *
 */
/**
 * @swagger
 *    api/tasks/allTasks:
 *    get:
 *      summary: Get all tasks
 *      description: >
 *        You recived array of objects
 *
 *      tags: [Task]
 *
 *      responses:
 *        "201":
 *          description:  Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/TaskCreationRequestBody'
 *
 */
router.get("/allTasks", authorization, taskControllers.getAllTasks);
/**
 * @swagger
 *  components:
 *    schemas:
 *      ChangeStatus:
 *        type: string
 *        properties:
 *
 *
 *          completed:
 *            type: boolean
 *            description: default false
 *
 *        example:
 *
 *          completed: true
 *
 *
 *
 *
 *
 */

/**
 * @swagger
 *    api/tasks/{taskId}/completed:
 *    patch:
 *      summary: Edit task status
 *      description: >
 *        You can edit task status from quest to challenge
 *
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ChangeStatus'
 *      responses:
 *        "201":
 *          description:  Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/TaskCreationResponse'
 *
 *
 *        "404":
 *          description: Not found task with such `id`
 *
 */
router.patch("/:taskId/completed", authorization, taskControllers.updateStatus);
/**
 * @swagger
 *    api/tasks/{taskId}:
 *    patch:
 *      summary: Edit task
 *      description: >
 *        You can edit task
 *
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskCreationRequestBody'
 *      responses:
 *        "201":
 *          description:  Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/TaskCreationResponse'
 *
 *        "400":
 *          description: Fill in the field
 *        "404":
 *          description: Not found task with such `id`
 *
 */

router.patch("/:taskId", authorization, taskControllers.updateTask);

module.exports = router;
