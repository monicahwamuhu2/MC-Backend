const express = require('express'); 
const Therapist = require('../models/Therapist');
const router = express.Router();

// GET /api/therapists?specialty=CBT&location=New York&gender=Female&experience=5&page=1&limit=5
router.get('/', async (req, res) => {
    try {
        console.log("✅ GET request received! Query params:", req.query);

        let { specialty, location, gender, experience, therapyType, page = 1, limit = 10 } = req.query;
        const query = {};

        if (specialty) query.therapySpecialization = { $regex: new RegExp(specialty, "i") };
        if (location && location.trim() !== "") query["location.city"] = { $regex: new RegExp(location, "i") };
        if (gender) query.gender = { $regex: new RegExp(gender, "i") };

        // Normalize sessionModes (convert "Virtual" to "Online")
        if (therapyType) {
            const normalizedTherapyType = therapyType.toLowerCase() === "virtual" ? "Online" : therapyType;
            query.sessionModes = { $regex: new RegExp(normalizedTherapyType, "i") };
        }

        // Validate and parse experience
        const parsedExperience = parseInt(experience);
        if (!isNaN(parsedExperience)) {
            query.experience = { $gte: parsedExperience };
        }

        console.log("🔎 Searching with query:", query);

        const therapists = await Therapist.find(query)
            .sort({ experience: -1 }) // Sort by most experienced first
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit))
            .exec();

        console.log("📄 Results found:", therapists.length);

        res.json({ total: therapists.length, page: parseInt(page), data: therapists });
    } catch (err) {
        console.error("❌ Error fetching therapists:", err);
        res.status(500).json({ error: "Server Error" });
    }
});

// POST /api/therapists
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        if (!data || (Array.isArray(data) && data.length === 0)) {
            return res.status(400).json({ error: "Request body cannot be empty." });
        }

        const validateTherapist = (therapist) => {
            return therapist.name &&
                   typeof therapist.age === "number" &&
                   therapist.gender &&
                   Array.isArray(therapist.therapySpecialization) &&
                   therapist.therapySpecialization.length > 0 &&
                   typeof therapist.experience === "number" &&
                   Array.isArray(therapist.sessionModes) &&
                   therapist.sessionModes.length > 0 &&
                   therapist.location &&
                   therapist.location.city &&
                   therapist.location.country &&
                   Array.isArray(therapist.availability) &&
                   therapist.availability.length > 0 &&
                   Array.isArray(therapist.languages) &&
                   therapist.languages.length > 0 &&
                   therapist.budgetRange &&
                   therapist.culturalSensitivity &&
                   Array.isArray(therapist.concerns) &&
                   therapist.concerns.length > 0 &&
                   typeof therapist.hourlyRate === "number" &&
                   therapist.contact &&
                   therapist.contact.email && 
                   therapist.contact.phone;
        };

        if (Array.isArray(data)) {
            if (!data.every(validateTherapist)) {
                return res.status(400).json({ error: "Each therapist must have all required fields." });
            }

            const newTherapists = await Therapist.insertMany(data);
            return res.status(201).json({ message: "Therapists added successfully", data: newTherapists });
        } else {
            if (!validateTherapist(data)) {
                return res.status(400).json({ error: "Missing required fields." });
            }

            const newTherapist = new Therapist(data);
            await newTherapist.save();
            return res.status(201).json({ message: "Therapist added successfully", data: newTherapist });
        }
    } catch (err) {
        console.error("❌ Error adding therapist:", err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/therapists/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTherapist = await Therapist.findByIdAndDelete(id);

        if (!deletedTherapist) {
            return res.status(404).json({ error: "Therapist not found" });
        }

        res.json({ message: "Therapist deleted successfully", data: deletedTherapist });
    } catch (err) {
        console.error("❌ Error deleting therapist:", err);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
