const mongoose = require("mongoose");

const TherapistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Non-Binary", "Other"] },
    maritalStatus: { type: String, enum: ["Single", "Married"] },

    therapySpecialization: [{ 
        type: String, 
        required: true, 
        enum: ["CBT", "Trauma Therapy", "Couples Therapy", "Mindfulness Therapy"] 
    }],

    experience: { type: Number, required: true },
    experienceLevel: { 
        type: String, 
        enum: ["Beginner", "Intermediate", "Expert"], 
        required: true 
    },

    sessionModes: [{ type: String, enum: ["Online", "In-Person", "Hybrid"] }], 

    location: { 
        city: { type: String, required: true }, 
        state: { type: String }, 
        country: { type: String, required: true } 
    },

    availability: [
        {
            day: { type: String, required: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
            timeSlots: [{ type: String, required: true }] 
        }
    ],

    languages: [{ type: String, required: true }],
    insuranceAccepted: { type: Boolean, default: false },
    insuranceCoverage: { type: String, enum: ["Full", "Partial", "None"] }, 
    acceptedInsuranceProviders: [{ type: String }], 

    budgetRange: { 
        type: String, 
        required: true, 
        enum: ["Free", "Ksh 1,500 - Ksh 2,500", "Ksh 3,000 - Ksh 5,000", "Ksh 5,000+"] 
    },

    culturalSensitivity: { 
        type: String, 
        required: true, 
        enum: ["Christian", "Muslim", "LGBTQ+ Friendly", "No Preference"] 
    },

    concerns: [{ 
        type: String, 
        required: true, 
        enum: ["Anxiety", "Depression", "Stress", "Relationship Issues"] 
    }],

    hourlyRate: { type: Number, required: true },
    paymentMethods: [{ type: String, enum: ["Cash", "Credit Card", "Mobile Payment", "Insurance"] }],

    ratings: { type: Number, default: 0 }, 
    reviews: [{ type: String }], 

    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    }
});

module.exports = mongoose.model("Therapist", TherapistSchema);
