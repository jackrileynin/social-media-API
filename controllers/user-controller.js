const User = require('../models/Users');
module.exports ={
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find({});
             res.json(allUsers);
             console.log(allUsers);
        } catch (err) {
            console.log(err);
             res.status(400).json(err);
        }
    },

    async getUserById(req, res) {
        try {
            const individualUser = await User.findById(req.params.id);
            return res.json(individualUser);
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const { username, email } = req.body;
            const create = await User.create({ username, email });
            return res.json(create);
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            return res.json(updateUser);
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            return res.json(deleteUser);
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const addFriend = await User.findByIdAndUpdate(
                req.params.id,
                { $push: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            );
            return res.json(addFriend);
        } catch (err) {
            return res.status(404).json(err);
        }
    },

    async removeFriend(req, res) {
        try {
            const removeFriend = await User.findByIdAndUpdate(
                req.params.id,
                { $pull: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            );
            return res.json(removeFriend);
        } catch (err) {
            return res.status(404).json(err);
        }
    }
};