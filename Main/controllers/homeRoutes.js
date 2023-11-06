const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route to get all posts and render the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to view a specific post with comments
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
          ],
        },
      ],
    });

    const post = postData.get({ plain: true });
    post.comments = post.comments.map(comment => ({...comment, canDelete: comment.userId == req.session.user_id}));

    if (post) {
      res.render('post-comment', {
        ...post,
        logged_in: true,
        postData: post,
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to view and edit a post
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!postData) {
      res.redirect("/dashboard");
    }
    const post = postData.get({ plain: true });

    res.render('update', {
      post, 
      logged_in: true, 
      id: req.body.id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render the user's dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
