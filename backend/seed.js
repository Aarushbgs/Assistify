const mongoose = require("mongoose");
const Worker = require("./models/Worker");
const dns = require("dns");
require("dotenv").config();

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

 
const workers = [
  {
    name: "Rahul Sharma",
    phone: "9000005001",
    service: "Cook",
    city: "Mumbai",
    area: "Andheri West",
    monthlySalary: 4500,
    location: {
      type: "Point",
      coordinates: [72.8347, 19.1364]
    }
  },
  {
    name: "Priya Verma",
    phone: "9000005002",
    service: "Maid",
    city: "Mumbai",
    area: "Bandra West",
    monthlySalary: 4000,
    location: {
      type: "Point",
      coordinates: [72.8263, 19.0596]
    }
  },
  {
    name: "Amit Kumar",
    phone: "9000005003",
    service: "Cook & Maid",
    city: "Mumbai",
    area: "Powai",
    monthlySalary: 4800,
    location: {
      type: "Point",
      coordinates: [72.9052, 19.1176]
    }
  },
  {
    name: "Neha Singh",
    phone: "9000005004",
    service: "Cook",
    city: "Mumbai",
    area: "Ghatkopar",
    monthlySalary: 3500,
    location: {
      type: "Point",
      coordinates: [72.9081, 19.0856]
    }
  },
  {
    name: "Rakesh Yadav",
    phone: "9000005005",
    service: "Maid",
    city: "Mumbai",
    area: "Borivali",
    monthlySalary: 3000,
    location: {
      type: "Point",
      coordinates: [72.8567, 19.2307]
    }
  },
  {
    name: "Pooja Kumari",
    phone: "9000005006",
    service: "Cook & Maid",
    city: "Mumbai",
    area: "Malad West",
    monthlySalary: 4900,
    location: {
      type: "Point",
      coordinates: [72.8348, 19.1864]
    }
  },
  {
    name: "Sunil Kumar",
    phone: "9000005007",
    service: "Cook",
    city: "Mumbai",
    area: "Kandivali",
    monthlySalary: 4200,
    location: {
      type: "Point",
      coordinates: [72.8493, 19.2058]
    }
  },
  {
    name: "Anita Devi",
    phone: "9000005008",
    service: "Maid",
    city: "Mumbai",
    area: "Dadar",
    monthlySalary: 3800,
    location: {
      type: "Point",
      coordinates: [72.8424, 19.0178]
    }
  },
  {
    name: "Vikas Sharma",
    phone: "9000005009",
    service: "Cook & Maid",
    city: "Mumbai",
    area: "Chembur",
    monthlySalary: 4700,
    location: {
      type: "Point",
      coordinates: [72.8930, 19.0522]
    }
  },
  {
    name: "Kiran Devi",
    phone: "9000005010",
    service: "Cook",
    city: "Mumbai",
    area: "Navi Mumbai",
    monthlySalary: 4400,
    location: {
      type: "Point",
      coordinates: [73.0297, 19.0330]
    }
  }
];


async function seedData() {
  try {

    await Worker.insertMany(workers);

    console.log(` ${workers.length} Workers Inserted Successfully`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();
