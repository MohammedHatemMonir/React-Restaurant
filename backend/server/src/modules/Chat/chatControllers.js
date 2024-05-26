
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC1XeZ_QO13eJuqaHDhJ5O2BZH4_IJXP6g");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const restaurant = require('../../database/models/resturant.Model')
const meal = require('../../database/models/Meals_model')


let Keywords = ["Restaurant:","Meal:"]


function containsAnyWord(string, wordList) {
    return wordList.find(word => string.includes(word));
}


const history =[
  {
    role: "user",
    parts: [{ text: "System prompt: You are a Restaurant website Chatbot, It's called DineMe. You should respond to the user's messages and help know their preferences. Be friendly and a bit funny!"}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: if and only ifthe user asked if a restaurant exists or not, You should respond and only respond with 'Restaurant: (Put restaurant name here)' and i will search for it and tell you if we have it or not.."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: if and only ifthe user asked if a meal exists or not, You should respond and only respond with 'Meal: (Put Meal name here)' and i will search for it and tell you if we have it or not.."}],
  },
  {
    role: "model",
    parts: [{ text: "Understood."}],
  },
]




const SendMessageAI=async(req,res)=>{
    try {
        if(!req.session) res.send({Error: "Not authenticated"})
        if(!req.session.history) req.session.history = history;
        const chat =await model.startChat({
            history: req.session.history,
            generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 100,
            }
        });

        

        const result = await chat.sendMessage(req.body.message);
        const response = await result.response;
        req.session.history.push({role: "user", parts: [{ text: req.body.message}]})
        const aiText = await response.text();
        console.log("AI response first:", aiText);
        req.session.history.push({role: "model", parts: [{ text: aiText}]})

        let containedWord = containsAnyWord(aiText, Keywords)
        console.log("Contained word:", containedWord)



        if(containedWord){
            console.log("Do database function!");

            //CmdChatText = "System prompt: Found the restaurant! Tell the user that we have that restaurant."
            CmdChatText = "System prompt: I could not find it, Tell the user that we don't have it"
            
            if(containedWord === "Restaurant:"){
                const ResToSearch = aiText.replace(/Restaurant: /g, '').replace(/\.$/, '');;
                console.log("Restaurant to search:", ResToSearch)
                const FindRestaurant = await restaurant.aggregate([
                    { $match: { ResName: { $regex: ResToSearch, $options: "i" } } },
                    { $limit: 1 }
                ]);
                if(FindRestaurant){
                    CmdChatText = "System prompt: Found the restaurant! Tell the user that we have that restaurant and you'll navigate them soon."
                }else{
                    CmdChatText = "System prompt: I could not find it, Tell the user that we don't have it"
                }
            }
            if(containedWord === "Meal:"){
                const mealToSearch = aiText.replace(/Meal: /g, '').replace(/\.$/, '');;
                console.log("Meal to search:", mealToSearch)
                const FindMeal = await meal.aggregate([
                    { $match: { MealName: { $regex: mealToSearch, $options: "i" } } },
                    { $limit: 1 }
                ]);
                if(FindMeal){
                    CmdChatText = "System prompt: Found the Meal! Tell the user that we have that Meal and you'll navigate them soon."
                }else{
                    CmdChatText = "System prompt: I could not find it, Tell the user that we don't have it"
                }

            }
            // const CommandedChat = await model.startChat({
            //     history: req.session.history,
            //     generationConfig: {
            //     temperature: 0.2,
            //     maxOutputTokens: 100,
            //     }
            // });
            const result = await chat.sendMessage(CmdChatText);
            const response = await result.response;
            req.session.history.push({role: "user", parts: 
            [{ text:  CmdChatText }]});
            const aiText2 = await response.text();
            req.session.history.push({role: "model", parts: [{ text: aiText2}]})

            console.log("AI DATABASE RES:", aiText2);
            res.send({response: aiText2})
        }else{
        console.log("AI response:", aiText);
        res.send({response: aiText})
        }
    } catch (error) {
        console.log("Error in AI",error)
    }
}




const gett=async(req,res)=>{
    try {
        res.send('hello')
    } catch (error) {
        console.log(error)
    }
}
module.exports={gett,SendMessageAI}
