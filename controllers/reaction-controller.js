const Thought  = require('../models/Thought');
const {addReaction,
  removeReaction}  = require('../models/Reaction');

async function addReaction(req, res) {
  try {
    // code to add a reaction
    const newReaction = await Thought.findByIdAndUpdate(req.params.id, {$push: {reactions: req.body}}, {new: true, runValidators: true})
    return res.json(newReaction)
  } catch(err){
    res.status(404).json(err)
  }
}

async function removeReaction(req, res) {
  try {
    // code to remove a reaction
    const toBeRemovedReaction = await Thought.findByIdAndUpdate(req.params.id, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {new: true, runValidators: true})
    return res.json(toBeRemovedReaction)
  } catch(err){
    res.status(404).json(err)
  }
}

module.exports = {
  addReaction,
  removeReaction
};
