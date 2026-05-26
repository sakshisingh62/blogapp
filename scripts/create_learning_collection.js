// Script: create_learning_collection.js
// Usage: node scripts/create_learning_collection.js
// Reads MONGO_URI from .env and inserts sample documents into `learning` collection.

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const LearningSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: [String],
  published: Boolean
}, { timestamps: true });

const Learning = mongoose.model('Learning', LearningSchema);

async function main() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI not set in .env');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  const docs = [
    {
      title: 'Intro to MongoDB',
      description: 'Basics of MongoDB and CRUD operations',
      author: 'Instructor',
      tags: ['mongodb','database','nosql'],
      published: true
    },
    {
      title: 'Advanced Indexing',
      description: 'Indexing strategies and performance tuning',
      author: 'Sakshi Singh',
      tags: ['mongodb','indexing','performance'],
      published: false
    }
  ];

  try {
    const inserted = await Learning.insertMany(docs, { ordered: false });
    console.log('Inserted documents:', inserted.map(d=>d._id));
  } catch (err) {
    console.error('Insert error (some docs may already exist):', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
    process.exit(0);
  }
}

main();
