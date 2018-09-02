require('env').config();

const Snoostorm = require('snoostorm');
const Snoowrap = require ('snoowrap');

// Build Snoowrap and Snoostorm clients 

const r = new Snoowrap ( {
    userAgent: 'soccer-bot',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

const client = new Snoostorm(r);