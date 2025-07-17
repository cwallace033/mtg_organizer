var express = require('express');
var router = express.Router();
const Card = require('../models/card');

router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

router.post('/', async (req, res) => {
    const card = new Card(req.body);
    try {
        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (card == null) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.json(card);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate({ id: req.params.id}, req.body, { new: true});
        if (!updatedCard) return res.status(404).json({ message: 'Card not found' });
        res.json(updatedCard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCard = await Card.findOneAndDelete({ id: req.params.id });
        if (!deletedCard) return res.status(404).json({ message: 'Card not found' });
        res.json({ message: 'Card deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); 







module.exports = router;