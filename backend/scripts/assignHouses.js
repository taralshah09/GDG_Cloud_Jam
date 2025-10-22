import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/users.models.js";

dotenv.config();

// House assignments based on user names
const houseAssignments = {
  1: [
    "Aakanksha Bosmiya",
    "Aayushi Kumari",
    "Aghara Krish Rohitkumar",
    "Ajeet Prakash Pandey",
    "Amol PramodKumar Rawat",
    "Archit Rajesh Dubey",
    "Arman Amreliya",
    "Arpan vala",
    "Arth Doshi",
    "Arya Manishkumar Chauhan",
    "Babariya Hemanshi Rajubhai",
    "BALDANIYA MIT SURESHBHAI",
    "Baldha Parthkumar Maheshbhai",
    "Bhati Piyush Pramod",
    "Bhavya Fattania",
    "BHUNGALIYA YASH SURESHBHAI",
    "Bhut Dhanvi Piyushkumar",
    "Brijeshkumar Bambhaniya",
    "Champawat Nagendrasingh",
    "CHAUDHARI MEET MUKESHBHAI",
    "Chaudhari Rohan Rakeshbhai",
    "Chaudhary Arvind Ramaram",
    "Chauhan Nishit DhavalBhai",
    "Chauhan priya Bhaveshbhai",
    "Chauhan Umeshbhai Ramanbhai",
    "Dafda Pratikkumar Hasubhai",
    "Daraji Darshan.J",
  ],
  2: [
    "Darshil Hareshbhai Savaliya",
    "Desai Janvi Vishnubhai",
    "Dev Dipakkumar Vaghela",
    "Dev Patel",
    "Devansh Dipakbhai Kashiyani",
    "Dhairya prayang vora",
    "Dhanani Keval Bharatbhai",
    "Dholiya Parthiv Kiritbhai",
    "Dhriti Shrivastava",
    "Dhruv Ozarkar",
    "Dhruvi kalariya",
    "Dhruvish Chudasama",
    "Diya Nakhva",
    "Dodiya Indrajeetsinh Pravinbhai",
    "Dubey rajyash",
    "Dungrani yashvi sureshbhai",
    "Gajera Karan Manaharbhai",
    "Ghelani Ayush",
    "Gohil Pranavkumar Bhupendrabhai",
    "Goti Dhyey Nileshbhai",
    "Hardik Singh",
    "Harsora Rutva Anilbhai",
    "Het",
    "Het Dedania",
    "Hetaxi Mahipal Tapodhan",
    "Hinsu hit",
  ],
  3: [
    "Hitarth Karia",
    "ishita devjani",
    "Isotiya prins jagdishbhai",
    "Italiya Parthiv Laljibhai",
    "Jadala Krutika Darshanbhai",
    "Jain Krish Alpesh",
    "Jakhariya Prince Narendrabhai",
    "Jani Arjun Rajeshkumar",
    "Jash shitalbhai chaudhari",
    "Jatin Parmari",
    "Jay Agrawal",
    "Jay Agrawal Arun bhai",
    "Jethva Amit Kishorbhai",
    "Jethva Jay S.",
    "JUNED ANSARI",
    "Kathan Doshi",
    "Kavin Jindal",
    "Khasiya vivek prakashbhai",
    "Komal shah",
    "Krish Dipakbhai Patel",
    "Krrish Bhaveshbhai Chandegara",
    "krushangikumari jayeshkumar patel",
    "Kukshi Shah",
    "KUMAWAT DEVILAL RADHESHYAM",
    "LAKHANKIYA DHARMIKKUMAR HARESHBHAI",
    "Lunagariya meet hiteshbhai",
    "Macwan shrey",
  ],
  4: [
    "Makvana Dharmesh dineshbhai",
    "Makwana Harsh sanjaybhai",
    "MANAS MAKWANA Y",
    "Mandli Saxi Taxeshbhai",
    "Manthan Jagdishbhai Movaliya",
    "MANTHAN RAVINDRABHAI VASOYA",
    "Marj Paraskumar Vyas",
    "Mehta Karan Tusharbhai",
    "Mehta Rudra Nareshbhai",
    "Mili Kava",
    "Mistry Meera Sunilkumar",
    "Mistry Yug Vipulkumar",
    "Mit Vinodbhai Prajapati",
    "MOCHI JITKUMAR SANJAYKUMAR",
    "MODI SANKET MILANKUMAR",
    "MORADIYA NEEL RAJESHKUMAR",
    "Mrudul Alpeshkumar Thakkar",
    "Nikhil Manohar Chaudhari",
    "Nishtha savani",
    "Odedara Prakash Nathabhai",
    "Paghdal Bansi Babubhai",
    "Panchal Manshi Shaileshkumar",
    "Param Dhavalkumar Gajjar",
    "Param rao",
    "Parmar Dharmi Prakashbhai",
    "Parmar Falguni Ashokbhai",
    "parmar jiya mukeshbhai",
  ],
  5: [
    "Parmar krish Dharmeshbhai",
    "Parmar Parth Piyushbhai",
    "ParmarAyush",
    "Parth Bharatkumar Dodiya",
    "Parv Amitkumar Shah",
    "Parv Chavda",
    "Patani Divya Laxmanbhai",
    "Patel Ayush Ketanbhai",
    "Patel Dhruv Sureshbhai",
    "Patel Harshilkumar Pankajbhai",
    "Patel Rudra Kalpeshkumar",
    "Patel ShreyKumar kiritbhai",
    "Patel zeelkumar ashokbhai",
    "PATHAN MOHMMAD AAQIB MAHEBUBKHAN",
    "Pilojpara Aditi Dharmeshbhai",
    "Prajapati Jeel Dineshbhai",
    "Prajapati Kanishk Shaileshkumar",
    "Prajapati Krunal Manubhai",
    "Prajapati Pruthil Rajubhai",
    "Pranav S Kubavat",
    "Pratham Chudasama",
    "Preet Manishbhai Gohil",
    "Prince Bhalala",
    "Priya Parmar",
    "Priyank Ramesh Badarshahi",
    "Priyanshu Jyotindrabhai Jagad",
    "Priyanshu kharadi",
  ],
  6: [
    "PUJAN PAREKH",
    "Pujara Vatsal Rasiklal",
    "Pushkar Rakeshbhai Manvar",
    "Ram Mihir Bharatbhai",
    "Ramani Sarang",
    "Ratanpara Prince Jigneshbhai",
    "Rathod Asmita Jagdishbhai",
    "Reeva Kanakhara",
    "Riddhi Damasiya",
    "Rishabh Shah",
    "Roshnaiwala Mohammed Kalim Faisal",
    "Rudesh pankaj nakhva",
    "Rushikesh Mujpara",
    "Rutva Kothari",
    "Rutva Shah",
    "Sachin Baghel",
    "Sagar Karmesh Jitendrabhai",
    "Samveg Shah",
    "Sarthakk Anjariya",
    "Saumya Shah",
    "Savaliya Mitesh Jayantibhai",
    "SHAH HARSHIT MANISH",
    "Shah Keval Pintubhai",
    "Shaikh Alvirabanu Mohammed Aarif",
    "Shaktisinh Chavda",
    "Shingala Harsh Hiteshbhai",
  ],
  7: [
    "Shubham M. Chauhan",
    "Shubham Tankariya",
    "Silajiya Yuvraj Hiren",
    "Sohum Shukla",
    "Solanki fenil yogeshbhai",
    "SOLANKI RAMDE VAJASHIBHAI",
    "Solanki Ravi",
    "Solanki Shashank Bhupendrabhai",
    "Sonali Parshuram Kale",
    "Suthar Manit Kalpeshbhai",
    "Tailor Sumit Jigneshbhai",
    "Tanmay Tushar Desai",
    "Tilak M. Gajjar",
    "Tirth Devenchandra Vyas",
    "Tisha Varma",
    "Uvesh Anavar bhai Mor",
    "Vaja Vinay Jentibhai",
    "Vanjara Juhi Bipinkumar",
    "Vedant More",
    "VIGNESH N",
    "Vishv Vekariya",
    "Yagni Trivedi",
    "YASH PRAJAPATI",
    "Yashvi Sanghvi",
    "Yug Shah",
    "Zala Krishna Mahendra bhai",
  ],
};

// Function to normalize name for comparison
function normalizeName(name) {
  if (!name) return "";
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/[.,]/g, ""); // Remove dots and commas
}

// Function to check if names match (fuzzy matching)
function namesMatch(dbName, searchName) {
  const normalizedDb = normalizeName(dbName);
  const normalizedSearch = normalizeName(searchName);

  // Exact match
  if (normalizedDb === normalizedSearch) return true;

  // Check if one contains the other (for partial matches)
  if (
    normalizedDb.includes(normalizedSearch) ||
    normalizedSearch.includes(normalizedDb)
  ) {
    return true;
  }

  // Check if main parts match (first name + last name)
  const dbParts = normalizedDb.split(" ");
  const searchParts = normalizedSearch.split(" ");

  // If both have at least first and last name, compare those
  if (dbParts.length >= 2 && searchParts.length >= 2) {
    const dbFirstLast = `${dbParts[0]} ${dbParts[dbParts.length - 1]}`;
    const searchFirstLast = `${searchParts[0]} ${
      searchParts[searchParts.length - 1]
    }`;
    if (dbFirstLast === searchFirstLast) return true;
  }

  return false;
}

async function assignHousesByName() {
  try {
    console.log("🔌 Connecting to MongoDB...");

    await mongoose.connect("mongodb+srv://taralshah992005_db_user:admin@cluster0.gupqbz6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("✅ Connected to MongoDB\n");

    let totalUpdated = 0;
    let totalNotFound = 0;
    const notFoundNames = [];
    const multipleMatches = [];

    // Get all users from database
    const allUsers = await User.find({}).lean();
    console.log(`📊 Total users in database: ${allUsers.length}\n`);

    // Process each house
    for (let houseId = 1; houseId <= 7; houseId++) {
      console.log(`\n🏠 Processing House ${houseId}...`);
      const names = houseAssignments[houseId];
      let houseUpdated = 0;
      let houseNotFound = 0;

      for (const searchName of names) {
        try {
          // Find matching users
          const matchingUsers = allUsers.filter((user) =>
            namesMatch(user.name, searchName)
          );

          if (matchingUsers.length === 1) {
            const user = matchingUsers[0];

            // Update in database
            const updatedUser = await User.findByIdAndUpdate(
              user._id,
              { house_id: houseId },
              { new: true }
            );

            if (updatedUser.house_id === houseId) {
              console.log(`   ✓ ${updatedUser.name} → House ${houseId}`);
              houseUpdated++;
            }
          } else if (matchingUsers.length > 1) {
            console.log(`   ⚠ Multiple matches for "${searchName}":`);
            matchingUsers.forEach((u) =>
              console.log(`      - ${u.name} (${u.email})`)
            );
            multipleMatches.push({
              searchName,
              matches: matchingUsers.map((u) => ({
                name: u.name,
                email: u.email,
              })),
              expectedHouse: houseId,
            });
          } else {
            console.log(`   ✗ Not found: "${searchName}"`);
            houseNotFound++;
            notFoundNames.push({ name: searchName, expectedHouse: houseId });
          }
        } catch (error) {
          console.error(
            `   ❌ Error processing "${searchName}":`,
            error.message
          );
        }
      }

      console.log(
        `   House ${houseId} Summary: ${houseUpdated} updated, ${houseNotFound} not found`
      );
      totalUpdated += houseUpdated;
      totalNotFound += houseNotFound;
    }

    // Display final statistics
    console.log("\n═══════════════════════════════════════");
    console.log("📊 Final Summary");
    console.log("═══════════════════════════════════════");
    console.log(`✅ Total users updated: ${totalUpdated}`);
    console.log(`❌ Total users not found: ${totalNotFound}`);
    console.log(`⚠️  Multiple matches found: ${multipleMatches.length}`);

    // Show house distribution
    console.log("\n📊 Current House Distribution:");
    for (let houseId = 1; houseId <= 7; houseId++) {
      const count = await User.countDocuments({ house_id: houseId });
      console.log(`   House ${houseId}: ${count} members`);
    }

    // Show users not found (if any)
    if (notFoundNames.length > 0) {
      console.log("\n⚠️  Names not found in database:");
      console.log(
        "   These users may need different name formatting or need to be added via CSV:"
      );
      notFoundNames.slice(0, 20).forEach(({ name, expectedHouse }) => {
        console.log(`   - "${name}" (should be in House ${expectedHouse})`);
      });
      if (notFoundNames.length > 20) {
        console.log(`   ... and ${notFoundNames.length - 20} more`);
      }
    }

    // Show multiple matches (if any)
    if (multipleMatches.length > 0) {
      console.log("\n⚠️  Multiple matches found:");
      console.log("   Please assign these manually:");
      multipleMatches.forEach(({ searchName, matches, expectedHouse }) => {
        console.log(`   - "${searchName}" (House ${expectedHouse}) matched:`);
        matches.forEach((m) => console.log(`      • ${m.name} (${m.email})`));
      });
    }

    console.log("\n✅ House assignment complete!\n");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 Connection closed");
  }
}

// Run the script
assignHousesByName();
