import mongoose  from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // MongoDB URI

if (!MONGODB_URI) {// agar MongoDB URI nahi mili toh error throw karega
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
} 

let cached = global.mongoose;

if(!cached){
  cached = global.mongoose = {conn: null, promise: null}; // agar cached nahi hai toh global mongoose mai ek object banayenge jisme conn aur promise dono null honge
}

export async function connectToDatabase() {
    
    if(cached.conn){
      console.log("🔄 Using existing database connection");

        return cached.conn; // agar conn pahle se ho rakha hai toh wahi return karega
    }

    if(!cached.promise){
        console.log("🛠️ Creating new MongoDB connection...");
        //agar promise nahi hai toh ek naya promise banayenge
        const opts = {        // options for MongoClient.connect
        bufferCommands: true,  
        maxPoolSize: 5,   
    };
    
      cached.promise = mongoose.connect(MONGODB_URI as string,opts).then(()=>{    // connect to MongoDB
        mongoose.connection ;
        console.log("✅ MongoDB connected successfully!");

        return mongoose;
      });
    } 
  
    try{
      cached.conn = await cached.promise; // agar promise hai toh uska wait karega
    }catch(error){
      cached.promise = null;
      console.error("❌ Failed to connect to MongoDB:", error);
    throw error;
  }

  return cached.conn;    
}
