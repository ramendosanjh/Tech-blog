const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create comments
router.post('/', withAuth, async (req, res) => {
  try {
    console.log('Creating a new comment:');
    console.log(req.body);

    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });

    console.log('New comment created:');
    console.log(newComment);

    res.status(200).json(newComment);
  } catch (err) {
    console.log('Error creating comment:');
    console.error(err);
    res.status(400).json(err);
  }
});

// Route to delete a selected comment (not in acceptance criteria)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    console.error('Error deleting comment:');
    res.status(500).json(err);
  }
});

module.exports = router;
