import express from 'express';

import {
    createSwap,
    getPendingSwaps,
    acceptSwap,
    rejectSwap,
    getCompletedSwaps,
    searchSwaps
} from '../controllers/SwapController.js';

import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

/**
 * Module to handle routes about swaps operations
 * 
 * @module routes/swaps
 * 
 * @requires express
 * @requires controllers/SwapController
 * @requires middleware/authenticate
 * 
 * @type {object}
 * @const
 * @namespace swapsRouter
 * 
 * @property {object} router - Express router object
 * @property {function} createSwap - Route handler for POST /swaps
 * @property {function} getPendingSwaps - Route handler for GET /swaps/pending
 * @property {function} acceptSwap - Route handler for PUT /swaps/:id/accept
 * @property {function} rejectSwap - Route handler for PUT /swaps/:id/reject
 * @property {function} getCompletedSwaps - Route handler for GET /swaps/completed
 */

/**
 * create a swap request
 * @route POST /swaps
 * @returns {object} The created swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name createSwap
 */
router.post('/swaps', authenticate, createSwap);

/**
 * get a pending swap request
 * @route GET /swaps/pending
 * @returns {object} The pending swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name getPendingSwaps
 */
router.get('/swaps/pending', authenticate, getPendingSwaps);

/**
 * accept a swap request
 * @route PUT /swaps/:id/accept
 * @returns {object} The accepted swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name acceptSwap
 */
router.put('/swaps/:id/accept', authenticate, acceptSwap);

/**
 * reject a swap request
 * @route PUT /swaps/:id/reject
 * @returns {object} The rejected swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name rejectSwap
 */
router.put('/swaps/:id/reject', authenticate, rejectSwap);

/**
 * get completed swaps
 * @route GET /swaps/completed
 * @returns {object} The completed swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name getCompletedSwaps
 */
router.get('/swaps/completed', authenticate, getCompletedSwaps);

/**
 * search swaps
 * @route GET /swaps/search
 * @returns {object} The searched swap.
 * @throws {Error} If the request is invalid or an error occurs.
 * @access Private
 * @name searchSwaps
 */
router.get('/swaps/search', authenticate, searchSwaps);


export default router;