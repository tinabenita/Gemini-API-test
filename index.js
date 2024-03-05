const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config() //text to text
const fs= require('fs') //text,img to text

// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


//Text to Text
/* async function run(){
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt= "Write a story about a magic backpack"
    const result= await model.generateContent(prompt);
    const response= await result.response;
    const text = response.text();
    console.log(text);
}
run(); */

//Text,Image to Text
function filetoGenerativePart(path, mimeType){
    return{
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString('base64'),
            mimeType
        }
    }
}
async function run(){
    const model= genAI.getGenerativeModel({model: "gemini-pro-vision"});
    const prompt= "What's different between these pictures?"
    const imageParts= [
        filetoGenerativePart("")
    ]
}
