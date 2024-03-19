const  Thought = require('../models/Thought');
const {addReaction,
  removeReaction}  = require('../models/Reaction');

module.exports = {
    getAllThoughts: async function(req, res) {
        try {
      // code to get all thoughts
     const allThoughts = await Thought.find({})
        return res.json(allThoughts)
    } catch (err){
        console.log(err)
        return res.status(400).json(err)
    }

    },
    getThoughtById: async function(req, res) {
        try {
      // code to get one thought by id
      const individualThought = await Thought.findById(req.params.id);
      return res.json(individualThought);

    } catch (err){ res.status(404).json(err)}
    },
    createThought: async function(req, res) {
        try {
      // code to create a thought
      const {thoughtText, username} = req.body 
      const create = await Thought.create({thoughtText, username})
      return res.json(create)

    } catch(err){
        res.status(404).json(err)
    }
    },
    updateThought: async function(req, res) {
        try {
      // code to update a thought by id
      const updateThought = await Thought.findByIdAndUpdate(req.params.id
          , req.body, {new: true, runValidators: true})
          return res.json(updateThought)
    } catch(err){
        res.status(404).json(err)
    }
    }
    ,
    deleteThought: async function(req, res) {
        try {
      // code to delete a thought by id
      const deleteThought = await Thought.findByIdAndDelete(req.params.id)
      return res.json(deleteThought)
    } catch(err){
        res.status(404).json(err)
    }
    },
    addReaction: async function(req, res) {
        try {
      // code to add a reaction
      const addReaction = await Thought.findByIdAndUpdate(req.params.id, {$push: {reactions: req.body}}, {new: true, runValidators: true})
      return res.json(addReaction)
    } catch(err){
        res.status(404).json(err)
    }
    },
    removeReaction: async function(req, res) {
        try {
      // code to remove a reaction
      const removeReaction = await Thought.findByIdAndUpdate(req.params.id, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {new: true, runValidators: true})
      return res.json(removeReaction)
    } catch(err){
        res.status(404).json(err)
    }
    }

 }