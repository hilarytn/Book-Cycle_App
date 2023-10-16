import Message from "../models/Message.js";
import Chatroom from "../models/Chatroom.js";

// @desc     create message
// @route    POST /api/messages

export const createMessage = async (req, res) => {
    try {
        const { from, to, content } = req.body;
        let chatroom = await Chatroom.findOne({
            members: {
                $all: [from, to]
            }
        });
        if (!chatroom) {
            chatroom = await Chatroom.create({
                name: `${from}-${to}`,
                members: [from, to]
            });
        }

        const newMessage = await Message.create({
            content,
            chatUsers: [from, to],
            sender: from
        });
        res.status(201).json(newMessage); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// @desc     get all messages
// @route    GET /api/messages

export const getMessages = async (req, res) => {
    try {
        const from = req.params.user1Id;
        const to = req.params.user2Id;
        const newMessage = await Message.find({
            chatUsers: {
                $all: [from, to] } }).sort({ createdAt: 1 });

        const messages = newMessage.map((message) => {
            return {
                myself: message.sender.toString() === from,
                content: message.content
            }
        })

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
