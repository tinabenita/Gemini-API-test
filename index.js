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
/*function filetoGenerativePart(path, mimeType){
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
        filetoGenerativePart("bruh.jpg", "image/jpeg"),
        filetoGenerativePart("huh.jpg", "image/jpeg"),
    ]
    const result= await model.generateContent([prompt, ...imageParts])
    const response= await result.response
    const text= response.text()
    console.log(text)
}
run()*/


//Chat gemini-pro
/*async function run(){
    const model= genAI.getGenerativeModel({model: "gemini-pro"}); 
    const chat= model.startChat({
        history: [
            {
                role: "user",
                parts: "Hello, I have 17 cats in my house."
            },
            {
                role: "model",
                parts: "Nice to meet you. What would you like to know?"
            }
        ]
    })

    const msg= "How many paws are in my house?"
    const result= await chat.sendMessage(msg)
    const response= await result.response
    const text= response.text()
    console.log(text)
}
run()*/


//Text to Embedding(used to represent information as a list of floating point numbers in an array)
/*async function run(){
    const model= genAI.getGenerativeModel({model: "embedding-001"})
    const text= "The quick brown fox jumped over the lazy helipcopter"
    const result= await model.embedContent(text)
    const embedding= result.embedding
    console.log(embedding)
}
run()*/