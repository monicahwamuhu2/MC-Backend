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
  },
  // Adding 15 more therapists to get to 25 total
  {
    name: "Leila Abdallah",
    age: 36,
    gender: "Female",
    maritalStatus: "Married",
    therapySpecialization: ["Mindfulness Therapy", "CBT"],
    experience: 7,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Malindi",
      state: "Kilifi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["8:00 AM", "10:00 AM", "4:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["9:00 AM", "1:00 PM", "5:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["AAR", "NHIF"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Relationship Issues"],
    hourlyRate: 3500,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "leila@example.com",
      phone: "+254712987654"
    }
  },
  {
    name: "Daniel Kipchoge",
    age: 34,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "CBT"],
    experience: 6,
    experienceLevel: "Intermediate",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Eldoret",
      state: "Uasin Gishu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["9:00 AM", "11:00 AM", "3:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kalenjin"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "Britam"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Stress", "Depression"],
    hourlyRate: 3800,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "daniel@example.com",
      phone: "+254723987654"
    }
  },
  {
    name: "Dr. Esther Njeri",
    age: 41,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Couples Therapy"],
    experience: 11,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Wednesday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["2:00 PM", "4:00 PM", "6:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["AAR", "Jubilee", "NHIF", "Britam"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Anxiety", "Depression", "Stress"],
    hourlyRate: 5800,
    paymentMethods: ["Credit Card", "Mobile Payment", "Insurance"],
    contact: {
      email: "dresther@example.com",
      phone: "+254734987654"
    }
  },
  {
    name: "Martin Otieno",
    age: 30,
    gender: "Male",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 3,
    experienceLevel: "Beginner",
    sessionModes: ["Online"],
    location: {
      city: "Kisumu",
      state: "Kisumu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["4:00 PM", "6:00 PM", "8:00 PM"]
      },
      {
        day: "Sunday",
        timeSlots: ["1:00 PM", "3:00 PM", "5:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Luo"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression"],
    hourlyRate: 2000,
    paymentMethods: ["Mobile Payment", "Cash"],
    contact: {
      email: "martin@example.com",
      phone: "+254745987654"
    }
  },
  {
    name: "Zainab Mohamed",
    age: 32,
    gender: "Female",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "Mindfulness Therapy"],
    experience: 5,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "Hybrid"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["11:00 AM", "1:00 PM", "3:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "AAR"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 3200,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "zainab@example.com",
      phone: "+254756987654"
    }
  },
  {
    name: "Dr. Thomas Omondi",
    age: 47,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Couples Therapy", "Trauma Therapy"],
    experience: 16,
    experienceLevel: "Expert",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Kisumu",
      state: "Kisumu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Wednesday",
        timeSlots: ["8:00 AM", "10:00 AM", "2:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Luo"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["NHIF", "Jubilee", "AAR", "CIC"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Anxiety", "Depression", "Stress"],
    hourlyRate: 6500,
    paymentMethods: ["Cash", "Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "drthomas@example.com",
      phone: "+254767987654"
    }
  },
  {
    name: "Mercy Wambui",
    age: 29,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 4,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
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
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "AAR"],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 2300,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "mercy@example.com",
      phone: "+254778987654"
    }
  },
  {
    name: "Dr. Ali Hassan",
    age: 44,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Trauma Therapy", "CBT"],
    experience: 14,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Malindi",
      state: "Kilifi County",
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
    acceptedInsuranceProviders: ["AAR", "NHIF", "Britam"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress", "Relationship Issues"],
    hourlyRate: 5500,
    paymentMethods: ["Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "drali@example.com",
      phone: "+254789987654"
    }
  },
  {
    name: "Lucy Kimani",
    age: 26,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["Mindfulness Therapy", "CBT"],
    experience: 2,
    experienceLevel: "Beginner",
    sessionModes: ["Online"],
    location: {
      city: "Nakuru",
      state: "Nakuru County",
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
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression"],
    hourlyRate: 1800,
    paymentMethods: ["Mobile Payment", "Cash"],
    contact: {
      email: "lucy@example.com",
      phone: "+254790987654"
    }
  },
  {
    name: "John Kiprono",
    age: 37,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Couples Therapy", "Mindfulness Therapy"],
    experience: 8,
    experienceLevel: "Expert",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Eldoret",
      state: "Uasin Gishu County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["8:00 AM", "10:00 AM", "12:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["1:00 PM", "3:00 PM", "5:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kalenjin"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "Jubilee"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Stress", "Anxiety"],
    hourlyRate: 4200,
    paymentMethods: ["Cash", "Mobile Payment", "Insurance"],
    contact: {
      email: "john@example.com",
      phone: "+254701987654"
    }
  },
  {
    name: "Sofia Abubakar",
    age: 31,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["Trauma Therapy", "CBT"],
    experience: 5,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      },
      {
        day: "Wednesday",
        timeSlots: ["11:00 AM", "1:00 PM", "3:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "AAR"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 3800,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "sofia@example.com",
      phone: "+254712876543"
    }
  },
  {
    name: "Emmanuel Maina",
    age: 33,
    gender: "Male",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 6,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "Hybrid"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["4:00 PM", "6:00 PM", "8:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "CIC"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 3500,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "emmanuel@example.com",
      phone: "+254723876543"
    }
  },
  {
    name: "Dr. Rachel Wangari",
    age: 40,
    gender: "Female",
    maritalStatus: "Married",
    therapySpecialization: ["Couples Therapy", "Trauma Therapy"],
    experience: 12,
    experienceLevel: "Expert",
    sessionModes: ["In-Person", "Hybrid"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["8:00 AM", "10:00 AM", "2:00 PM"]
      },
      {
        day: "Wednesday",
        timeSlots: ["9:00 AM", "11:00 AM", "3:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["AAR", "Jubilee", "NHIF", "Britam"],
    budgetRange: "Ksh 5,000+",
    culturalSensitivity: "Christian",
    concerns: ["Relationship Issues", "Anxiety", "Stress"],
    hourlyRate: 6000,
    paymentMethods: ["Credit Card", "Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "drrachel@example.com",
      phone: "+254734876543"
    }
  },
  {
    name: "Ibrahim Ahmed",
    age: 36,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["Mindfulness Therapy", "CBT"],
    experience: 7,
    experienceLevel: "Intermediate",
    sessionModes: ["Online", "In-Person"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic"],
    insuranceAccepted: true,
    insuranceCoverage: "Partial",
    acceptedInsuranceProviders: ["NHIF", "AAR"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "Muslim",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 4000,
    paymentMethods: ["Mobile Payment", "Cash", "Insurance"],
    contact: {
      email: "ibrahim@example.com",
      phone: "+254745876543"
    }
  },
  {
    name: "Faith Moraa",
    age: 28,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Mindfulness Therapy"],
    experience: 3,
    experienceLevel: "Beginner",
    sessionModes: ["Online"],
    location: {
      city: "Kisii",
      state: "Kisii County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["4:00 PM", "6:00 PM", "8:00 PM"]
      },
      {
        day: "Sunday",
        timeSlots: ["2:00 PM", "4:00 PM", "6:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Kisii"],
    insuranceAccepted: false,
    insuranceCoverage: "None",
    acceptedInsuranceProviders: [],
    budgetRange: "Ksh 1,500 - Ksh 2,500",
    culturalSensitivity: "Christian",
    concerns: ["Anxiety", "Depression", "Stress"],
    hourlyRate: 2000,
    paymentMethods: ["Mobile Payment", "Cash"],
    contact: {
      email: "faith@example.com",
      phone: "+254756876543"
    }
  },
  {
    name: "Dr. Michael Onyango",
    age: 38,
    gender: "Male",
    maritalStatus: "Married",
    therapySpecialization: ["CBT", "Trauma Therapy", "Couples Therapy", "Mindfulness Therapy"],
    experience: 12,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person", "Hybrid"],
    location: {
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Monday",
        timeSlots: ["8:00 AM", "10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"]
      },
      {
        day: "Wednesday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
      },
      {
        day: "Friday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "French", "Luo"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["NHIF", "AAR", "Jubilee", "Britam", "CIC", "Madison"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "LGBTQ+ Friendly",
    concerns: ["Anxiety", "Depression", "Stress", "Relationship Issues"],
    hourlyRate: 4500,
    paymentMethods: ["Cash", "Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "drmichael@example.com",
      phone: "+254712345987",
      website: "www.drmichaelonyango.co.ke"
    }
  },
  // Adding comprehensive female therapist
  {
    name: "Dr. Aisha Khalif",
    age: 42,
    gender: "Female",
    maritalStatus: "Single",
    therapySpecialization: ["CBT", "Trauma Therapy", "Couples Therapy", "Mindfulness Therapy"],
    experience: 15,
    experienceLevel: "Expert",
    sessionModes: ["Online", "In-Person", "Hybrid"],
    location: {
      city: "Mombasa",
      state: "Mombasa County",
      country: "Kenya"
    },
    availability: [
      {
        day: "Tuesday",
        timeSlots: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
      },
      {
        day: "Thursday",
        timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
      },
      {
        day: "Saturday",
        timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM"]
      },
      {
        day: "Sunday",
        timeSlots: ["2:00 PM", "4:00 PM", "6:00 PM"]
      }
    ],
    languages: ["English", "Swahili", "Arabic", "German"],
    insuranceAccepted: true,
    insuranceCoverage: "Full",
    acceptedInsuranceProviders: ["NHIF", "AAR", "Jubilee", "Britam", "CIC", "Madison", "Resolution"],
    budgetRange: "Ksh 3,000 - Ksh 5,000",
    culturalSensitivity: "LGBTQ+ Friendly",
    concerns: ["Anxiety", "Depression", "Stress", "Relationship Issues"],
    hourlyRate: 4800,
    paymentMethods: ["Cash", "Mobile Payment", "Credit Card", "Insurance"],
    contact: {
      email: "draisha@example.com",
      phone: "+254723456789",
      website: "www.draishakhalif.co.ke"
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