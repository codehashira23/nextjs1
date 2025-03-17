import {NextRequest,NextResponse} from "next/server";
import { connectToDatabase } from "@/src/lib/db";
import User from "@/src/models/user";
import { error } from "console";

export async function POST(request:NextRequest){

    try{
        const { email, password } = await request.json(); //
        
        if (!email || !password) {
            return NextResponse.json 
            ({error: "email and password are required"},
            {status:400}
            );
        }

        await connectToDatabase();
        console.log("connected to database");

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json 
            ({error: "User(email) already exists"},
            {status:400}
            );
        }

        await User.create({ email, password });

        return NextResponse.json 
        ({error: "User created successfully"},
        {status:200});    

    }catch(error){
        return NextResponse.json 
        ({error: "Something went wrong ,failed to register user"},
        {status:500});
    }  
}