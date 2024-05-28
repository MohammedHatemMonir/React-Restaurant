
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC1XeZ_QO13eJuqaHDhJ5O2BZH4_IJXP6g");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const restaurant = require('../../database/models/resturant.Model')
const meal = require('../../database/models/Meals_model')


let Keywords = ["Restaurant:","Meal:", "Orders:","Cart:","Suggest Rest:"]


function containsAnyWord(string, wordList) {
    return wordList.find(word => string.includes(word));
}


const history =[
  {
    role: "user",
    parts: [{ text: "System prompt: You are a Restaurant website Chatbot, It's called DineMe. You should respond to the user's messages and help know their preferences."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: Be frienly with the user and try not to act like a robot."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: Do not provide infroamtion you're not given. If you don't know something, tell the user that you don't know."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: Do not get out of topic and follow the rules exactly as they are."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: if the user asked wether a restaurant exists or not, You should respond and only respond with 'Restaurant: (Put restaurant name here)'"}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: if the user asked if a meal exists or not, You should respond and only respond with 'Meal: (Put Meal name here)'"}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: If the user wants to know his orders you should respond with and only with 'Orders:'"}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: If the user wants to know information about his cart you should respond with and only with 'Cart:'"}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: Prioritize responding to the instructions I gave you and don't get out of topic."}],
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
            temperature: 0.1,
            maxOutputTokens: 50,
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
            let CmdChatText = null;
            let navigationLink = null;
            let MealID = null;

            if(containedWord === "Orders:"){

                CmdChatText = "System prompt: Tell him that you'll navigate him to his orders."
                navigationLink = `/myorders`
            }else if(containedWord === "Cart:"){

                CmdChatText = "System prompt: Tell him that you'll navigate him to his cart."
                navigationLink = `/mycart`
            }
            else if(containedWord === "Suggest Rest:"){
                
            }else{
            // if(containedWord === "Restaurant:"){
                const ResToSearch = aiText.replace(/Restaurant: /g, '').replace(/\.$/, '');;
                console.log("Restaurant to search:", ResToSearch)
                const FindRestaurant = await restaurant.aggregate([
                    { $match: { ResName: { $regex: ResToSearch, $options: "i" } } },
                    { $limit: 1 }
                ]);
                if(FindRestaurant[0]){
                    CmdChatText = `System prompt: Found the restaurant ${FindRestaurant[0].ResName} Tell the user that we have that restaurant and you'll navigate them soon.`
                    navigationLink = `/restaurant/${FindRestaurant[0]._id}/${FindRestaurant[0].ResName}`
                }
            // }
            // if(containedWord === "Meal:"){
                if(CmdChatText === null){
                const mealToSearch = aiText.replace(/Meal: /g, '').replace(/\.$/, '');;
                console.log("Meal to search:", mealToSearch)
                const FindMeal = await meal.aggregate([
                    { $match: { MealName: { $regex: mealToSearch, $options: "i" } } },
                    { $limit: 1 }
                ]);
                if(FindMeal[0]){
                    CmdChatText = `System prompt: Found the Meal ${FindMeal[0].MealName}, description: ${FindMeal[0].Description}. Tell the user that we have that Meal and you'll navigate them soon.`
                    navigationLink = `/restaurant/${FindMeal[0].ResID}/${FindMeal[0].MealName}`
                    MealID = FindMeal[0]._id;
                }
            }
        }
            // else{
            //         CmdChatText = "System prompt: I could not find it, Tell the user that we don't have it"
            //     }

            // }
            // const CommandedChat = await model.startChat({
            //     history: req.session.history,
            //     generationConfig: {
            //     temperature: 0.2,
            //     maxOutputTokens: 100,
            //     }
            // });
            if(CmdChatText === null){
                CmdChatText = "System prompt: I could not find it, Tell the user that we don't have it";
            }
            const result = await chat.sendMessage(CmdChatText);
            const response = await result.response;
            req.session.history.push({role: "user", parts: 
            [{ text:  CmdChatText }]});
            const aiText2 = await response.text();
            req.session.history.push({role: "model", parts: [{ text: aiText2}]})

            console.log("AI DATABASE RES:", aiText2);
            if(navigationLink){
                res.send({response: aiText2, redirect:navigationLink, MealID: MealID})
            }else{
            res.send({response: aiText2})
            }
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
