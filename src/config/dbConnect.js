import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin123@cluster0.jgqvbyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let db = mongoose.connection;

export default db;