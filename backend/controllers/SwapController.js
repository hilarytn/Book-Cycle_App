import Swap from '../models/Swap.js';

// @desc     initiate a swap
// @route    POST /api/swaps
// @access   Private

export const createSwap = async (req, res) => {
  try {
    const { intiator, recipient, book } = req.body;
    const swap = await Swap.create({ book, intiator, recipient });
    res.status(201).json(swap);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc     get all pending swaps
// @route    GET /api/swaps/pending
// @access   Private

export const getPendingSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({ status: 'pending' }).populate('initiator recipient book');
    res.status(200).json(swaps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc     accept a swap request
// @route    PUT /api/swaps/:id/accept
// @access   Private

export const acceptSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) {
      return res.status(404).json({ message: 'Swap not found' });
    }
    // Check if the user has permission to accept the swap (e.g., the recipient of the request)
    if (swap.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    swap.status = 'accepted';
    await swap.save();

    res.status(200).json(swap);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc     reject a swap request
// @route    PUT /api/swaps/:id/reject
// @access   Private

export const rejectSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) {
      return res.status(404).json({ message: 'Swap not found' });
    }
    // Check if the user has permission to reject the swap (e.g., the recipient of the request)
    if (swap.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    swap.status = 'rejected';
    await swap.save();

    res.status(200).json(swap);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc     get a list of completed swaps
// @route    GET /api/swaps/completed
// @access   Private

export const getCompletedSwaps = async (req, res) => {
  try {
    const completedSwaps = await Swap.find({ status: 'completed' }).populate('initiator recipient book');
    res.status(200).json(completedSwaps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//@desc  search and filter of swaps basing on the status using regex and mongoosePaginate
//@route GET /api/swaps/search
//@access Private

export const searchSwaps = async (req, res) => {
  try {
    const { status } = req.query;
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      populate: 'initiator recipient book',
      sort: { createdAt: -1 },
    };
    const query = {};
    if (status) {
      query.status = { $regex: status, $options: 'i' };
    }
    const swaps = await Swap.paginate(query, options);
    res.status(200).json(swaps);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
