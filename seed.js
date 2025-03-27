require('dotenv').config();
const connectDB = require('./config/db');
const Therapist = require('./models/Therapist');

const therapists = [
  {
    name: "Dr. Sarah Johnson",
    age: 35,
    gender: "Female",
    maritalStatus: "Married",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 8,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM"]
      },
      {
        day: "Wednesday",
        timeSlots: ["10:00 AM", "1:00 PM", "3:00 PM"]
      }
    ],
    languages: ["English", "Swahili"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["AAR", "Jubilee", "NHIF"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 4000,
    paymentMethods: ["Mobile Payment", "Insurance"],
    contact: {
      email: "drsarah@example.com",
      phone: "+254712345678"
    }
  },
  {
    name: "Dr. David Mwangi",
    age: 42,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "CBT"],
    experience: 12,
    experienceLevel: "Expert",
    sessionModes: ["Online", "Hybrid"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["8:00 AM", "10:00 AM", "4:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["9:00 AM", "2:00 PM", "5:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["NHIF", "Britam", "Jubilee"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Relationship Issues", "Stress"],
    hourlyRate: 5500,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "drdavid@example.com",
      phone: "+254723456789"
    }
  },
  {
    name: "Amina Hassan",
    age: 33,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["Mindfulness Therapy", "Couples Therapy"],
    experience: 5,
    experienceLevel: "Intermediate",
    sessionModes: ["Online"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["1:00 PM", "3:00 PM", "5:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Muslim",
    concerns: ["Relationship Issues", "Stress", "Depression"],
    hourlyRate: 2000,
    paymentMethods: ["Mobile Payment", "Cash"],
    contact: {
      email: "amina@example.com",
      phone: "+254734567890"
    }
  },
  {
    name: "Brian Ochieng",
    age: 29,
    gender: "Male",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Trauma Therapy"],
    experience: 3,
    experienceLevel: "Beginner",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Kisumu",
      state: "Kisumu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Wednesday",
        timeSlots: ["9:00 AM", "11:00 AM", "3:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["10:00 AM", "1:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Luo"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "CIC"],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression"],
    hourlyRate: 2200,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "brian@example.com",
      phone: "+254745678901"
    }
  },
  {
    name: "Dr. Fatima Ahmed",
    age: 38,
    gender: "Female",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "Mindfulness Therapy"],
    experience: 9,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["9:00 AM", "1:00 PM", "4:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["10:00 AM", "2:00 PM", "5:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["AAR", "Jubilee", "Britam", "NHIF"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 4500,
    paymentMethods: ["Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "drfatima@example.com",
      phone: "+254756789012"
    }
  },
  {
    name: "Joseph Kamau",
    age: 45,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Couples Therapy", "Mindfulness Therapy"],
    experience: 15,
    experienceLevel: "Expert",
    sessionModes: ["In-Person"],
    location: {
      city: "Nakuru",
      state: "Nakuru County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["8:00 AM", "10:00 AM", "2:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["9:00 AM", "11:00 AM", "3:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "Jubilee"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Stress", "Depression"],
    hourlyRate: 6000,
    paymentMethods: ["Cash", "Mobile Payment", "Insurance"],
    contact: {
      email: "joseph@example.com",
      phone: "+254767890123"
    }
  },
  {
    name: "Grace Muthoni",
    age: 31,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 4,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "Hybrid"],
    location: {
      city: "Eldoret",
      state: "Uasin Gishu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["3:00 PM", "5:00 PM", "7:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kalenjin"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression"],
    hourlyRate: 2500,
    paymentMethods: ["Mobile Payment", "Cash"],
    contact: {
      email: "grace@example.com",
      phone: "+254778901234"
    }
  },
  {
    name: "Dr. Omar Yusuf",
    age: 39,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "CBT"],
    experience: 10,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      },
      {
        day: "Wednesday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["AAR", "Britam", "NHIF"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 4200,
    paymentMethods: ["Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "dromar@example.com",
      phone: "+254789012345"
    }
  },
  {
    name: "Rebecca Wanjiku",
    age: 27,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Couples Therapy"],
    experience: 2,
    experienceLevel: "Beginner",
    sessionModes: ["Online"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Thursday",
        timeSlots: ["4:00 PM", "6:00 PM", "8:00 PM"]
      },
      {
        day: "Sunday",
        timeSlots: ["2:00 PM", "4:00 PM", "6:00 PM"]
      }
    ],
    languages: ["English", "Swahili"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Anxiety"],
    hourlyRate: 1800,
    paymentMethods: ["Mobile Payment"],
    contact: {
      email: "rebecca@example.com",
      phone: "+254790123456"
    }
  },
  {
    name: "Dr. Joshua Mutua",
    age: 48,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Mindfulness Therapy", "Trauma Therapy"],
    experience: 18,
    experienceLevel: "Expert",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["8:00 AM", "10:00 AM", "12:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["2:00 PM", "4:00 PM", "6:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kamba"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["NHIF", "Jubilee", "AAR", "Britam"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression", "Stress", "Relationship Issues"],
    hourlyRate: 7000,
    paymentMethods: ["Cash", "Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "drjoshua@example.com",
      phone: "+254701234567"
    }
  }
];

const seedDatabase = async () => {
  try {
    const conn = await connectDB();
    console.log('Starting database seeding...');
    
    // Clear existing data
    await Therapist.deleteMany({});
    console.log('Cleared existing therapist data');
    
    // Insert new data
    const seededTherapists = await Therapist.insertMany(therapists);
    console.log(`Successfully seeded ${seededTherapists.length} therapists`);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();