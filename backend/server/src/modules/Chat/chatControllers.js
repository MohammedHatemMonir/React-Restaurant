
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC1XeZ_QO13eJuqaHDhJ5O2BZH4_IJXP6g");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const restaurant = require('../../database/models/resturant.Model')
const meal = require('../../database/models/Meals_model')


let Keywords = ["Restaurant:","Meal:", "Orders:","Cart:","Suggest:"]


function containsAnyWord(string, wordList) {
    return wordList.find(word => string.includes(word));
}


const history =[
  {
    role: "user",
    parts: 
    [
        {text: "You are a Chatbot in a Restaurant website, It's called DineMe.Your name is DineMate.\nBe friendly with the user and try not to act like a robot.\nDo not provide infromation you're not given.\nDo not get out of topic and follow the rules exactly as they are.A user can leave a review on the restaurant or the meal, Make sure to remind them to do that when the time fits.if you want to check wether a restaurant exists or not, You should respond and only respond with 'Restaurant: (Put restaurant name here)' if you want to check wether a meal exists or not, You should respond and only respond with 'Meal: (Put Meal name here)'if you want to check a restaurant by it's category or niche, You should respond and only respond with 'Category: (Put category here)'If the user wants to know his orders you should respond with and only with 'Orders:'If the user wants to know information about his cart you should respond with and only with 'Cart:'Prioritize responding to the instructions I gave you and don't get out of topic.DO NOT ask the user if they have a specific restaurant in mind, Prioritize checking if meals exist or not."},
        {text: "input: I'd love to eat a burger"},
        {text: "output: Meal: Burger"},
        {text: "input: What are my orders?"},
        {text: "output: Orders:"},
        {text: "input: Can I see my cart?"},
        {text: "output: Cart:"},
        {text: "input: Do you have Burger King?"},
        {text: "output: Restaurant: Burger King"},
        {text: "input: MMM! the food is really great!"},
        {text: "output: I'm glad you liked it! Don't forget to leave a rating!"},
    ],
  },

  {
    role: "model",
    parts: [{ text: "I Understood. I'll do exactly as I'm ordered to do."}],
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
            else if(containedWord === "Suggest:"){



                //Mahmoud's code Here

                console.log("Restaurants array:")

              CmdChatText = "System prompt: We have: american buger, chinese food, italian pizza, mexican food. Tell the user that he can choose from them."
                
            }else{
            // if(containedWord === "Restaurant:"){
                const ResToSearch = aiText.replace(/Restaurant: /g, '').replace(/\.$/, '');;
                console.log("Restaurant to search:", ResToSearch)
                const FindRestaurant = await restaurant.aggregate([
                    { $match: { ResName: { $regex: ResToSearch, $options: "i" } } },
                    { $limit: 1 }
                ]);
                if(FindRestaurant[0]){
                    CmdChatText = `System prompt: Found the restaurant ${FindRestaurant[0].ResName} Tell the user that we have that restaurant and you'll navigate them soon. Also mention that they can leave a review.`
                    navigationLink = `/restaurant/${FindRestaurant[0]._id}/${FindRestaurant[0].ResName}`
                }
            // }
            // if(containedWord === "Meal:"){
                if(CmdChatText === null){
                  const mealToSearch = aiText.replace(/Meal: /g, '').replace(/\.$/, '');
                  console.log("Meal to search:", mealToSearch);
                  
                  // Remove spaces from the mealToSearch variable
                  const mealToSearchNoSpaces = mealToSearch.replace(/\s+/g, '');
                  console.log("Meal to search without spaces:", mealToSearchNoSpaces);
                  
                  const FindMeal = await meal.aggregate([
                      // Add a new field that has no spaces in the MealName
                      {
                          $addFields: {
                              mealNameNoSpaces: { $replaceAll: { input: "$MealName", find: " ", replacement: "" } }
                          }
                      },
                      // Match the new field against the search term without spaces
                      {
                          $match: {
                              mealNameNoSpaces: { $regex: mealToSearchNoSpaces, $options: "i" }
                          }
                      },
                      // Limit the results to 1
                      { $limit: 1 }
                  ]);
                if(FindMeal[0]){
                    CmdChatText = `System prompt: Found the Meal ${FindMeal[0].MealName}, It's description is ${FindMeal[0].Description}. Tell the user that we have that Meal and you'll navigate them soon. Also mention that they can leave a review.`
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
        res.send({response: "Error: TIME OUT"})
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
